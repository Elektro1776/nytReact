
require('dotenv').config();
import { renderPage } from '../client/renderers/server';
import express from 'express';
import request from 'request';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import config from './config';
import Article from './src/models/articleModel';
import articleRouter from './src/routes/article';
const app = express();
const PROD = process.env.NODE_ENV === 'production';
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
// mongoose.connect('mongodb://localhost/nytarticles', {
//   useMongoClient: true,
//   reconnectTries: Number.MAX_VALUE
//
// });
app.use(express.static(path.join(__dirname, '../build/')));
// if (PROD) {
//   app.get('/', async (req, res) => {
//
//     const initalContent = renderPage(req);
//     res.render('index', { initalContent });
//   });
// }
app.use(bodyParser.json());

app.use('/api/saved', articleRouter);

app.get('*', (req, res) => {
  res.render('index', { initalContent: 'Loading'} );
});

app.post('/api/search', (req,res) => {
  const { q, begin_date, end_date, page } = req.body;
  const options = {
    method: 'GET',
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    qs: req.body,
    headers:{
      'api-key': process.env.NYT_API_KEY
     }
  };
  request(options,(err, response, body) => {
    if (!err) {
      return res.send(response);
    }
    return res.send(err)
  });
});

// Serve the files on port 3000.
app.listen(config.port, () => {
  console.info('Example app listening on port 3000!!!!!!!!! !\n');
});
