const Post = require("../model/Post");

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");
    return res.json(posts);
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image
    });

    return res.json({ post });
  }
};
