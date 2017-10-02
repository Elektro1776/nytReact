const express = require('express');
import Article from '../models/articleModel';

const router = express.Router();


router.get('/', (req, res) => {
  Article.getArticles((articles) => {
    res.send(articles);
  })
});
router.post('/', (req, res) => {
  Article.saveArticle(req.body, (err,savedArticle) => {
    res.send(savedArticle);
  });
})
router.delete('/', (req, res) => {
  Article.deleteArticle(req.body.id, (err,deletedArticle) => {
    if (!err) {
      return Article.getArticles((articles) => {
        res.send(articles);
      })
    }
    res.sendStatus(500);
  });
});
module.exports = router;
