const { Schema, model } = require('mongoose');

const pageSchema = new Schema({
  pageTitle: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Page = model('Page', pageSchema);

module.exports = Page;
