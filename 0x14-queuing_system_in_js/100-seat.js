const express = require('express');
const kue = require('kue');
const { promisify } = require('util');
const redis = require('redis');

const app = express();
const client = redis.createClient();
const queue = kue.createQueue();


const asyncGet = promisify(client.get).bind(client);
let reservationEnabled = true;


const reserveSeat = (number) => {
  client.set('available_seats', number);
};

const getCurrentAvailableSeats = async () => {
  return await asyncGet('available_seats');
};

app.get('/available_seats', async (req, res) => {
  const seats = await getCurrentAvailableSeats();
  res.json({numberofAvailableSeats: seats});
});

app.get('/reserve_seat', async (req, res) => {
  if (!reservationEnabled) res.json({status: 'Reservation are blocked'});
  else {
    const job = queue.create('reserve_seat');
    job.save((err) => {
      if (!err) res.json({status: 'Reservation in progress'});
      else res.json({status: 'Reservation failed'});
    });

    job.on('complete', () => console.log(`Seat reservation job ${job.id} completed`))
    .on('failed', (err) => console.log(`Seat reservation job ${job.id} failed: ${err}`));
  }
});

app.get('/process', (req, res) => {
  res.json({status: 'Queue processing'});
  queue.process('reserve_seat', async (job, done) => {
    const stock = await getCurrentAvailableSeats();
    if (stock <= 0) {
      reservationEnabled = false;
      return done(new Error('Not enough seats available'));
    } else {
      reserveSeat(stock - 1);
      done();
    }
  });
});

app.listen(1245, () => {
  reserveSeat(50);
});
