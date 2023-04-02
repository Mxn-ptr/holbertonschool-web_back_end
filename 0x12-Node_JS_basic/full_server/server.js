import router from './routes';

const express = require('express');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port);

export default app;
