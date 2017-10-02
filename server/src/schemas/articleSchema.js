import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  headline: 'String',
  pub_date: 'Date',
  web_url: 'String'
}, {
  collection: 'articles'
});

export default mongoose.model('Article', ArticleSchema);
