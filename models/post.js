import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    isAdmin: false,
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", postSchema);

export default Post;