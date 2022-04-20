import mongoose, { Schema, model, Model } from 'mongoose';
import { IPost } from '../interfaces/index';

const postSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  tags: [{ type: String }],
});

postSchema.index({ title: 'text', tags: 'text' });

const Post: Model<IPost> = mongoose.models.Post || model('Post', postSchema);

export default Post;
