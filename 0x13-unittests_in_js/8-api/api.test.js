const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('test the index page', () => {
    request('http://localhost:7865', (error, response, body) => {
      if (response) {
        expect(response.statusCode, 200);
        expect(response.statusMessage, 'OK');
        expect(body, 'Welcome to the payment system');
      }
    });
  })
})
