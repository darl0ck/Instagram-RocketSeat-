const Post = require("../model/Post");

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await Post.save();

    return res.json({ post });
  }
};
