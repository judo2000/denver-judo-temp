const { Page } = require('../models');
const resolvers = {
  Query: {
    pages: async () => {
      const pages = await Page.find({});
      return pages;
    },
    page: async (parent, { pageTitle }) => {
      let page = await Page.findOne({ pageTitle: pageTitle });
      return page;
    },
  },
  Mutation: {
    addPage: async (parent, args) => {
      console.log(args);
      const page = await Page.create(args);
      return page;
    },
  },
};

module.exports = resolvers;
