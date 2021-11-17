import bodyParser from 'body-parser';
import express from 'express';

import toyHelpRouter from './routes/HelpRouter';

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Hello There');
});

app.use(bodyParser.json());

app.use('/toy', toyHelpRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
