import mongoose from 'mongoose';
import ArticleSchema from '../schemas/articleSchema';

module.exports = {
  getArticles(cb) {
    ArticleSchema.find((err, articles) => {
      if (!err) {
        return cb(articles);
      }
    })
  },
  saveArticle(articleToSave, cb) {
    const article = new ArticleSchema(articleToSave);
    article.save()
    .then((item) => {
      cb(null,item)
    })
    .catch((err) => {
      cb(err, null);
    })
  },
  deleteArticle(id, cb) {
    ArticleSchema.deleteOne({ _id: id })
    .then((deletedArticle) => {
      cb(null, deletedArticle)
    })
    .catch((err) => {
      cb(err, null)
    })
  }
}
