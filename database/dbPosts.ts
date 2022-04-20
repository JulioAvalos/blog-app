import { db } from '.';
import { IPost } from '../interfaces';
import Post from '../model/Post';

export const getPostBySlug = async (slug: string): Promise<IPost | null> => {
  await db.connect();
  const post = await Post.findOne({ slug }).lean();
  await db.disconnect();

  if (!post) {
    return null;
  }

  return JSON.parse(JSON.stringify(post));
};

interface PostSlug {
  slug: string;
}

export const getAllPostSlugs = async (): Promise<PostSlug[]> => {

  await db.connect();
  const slugs: any = await Post.find().select('slug -_id').lean();
  await db.disconnect();

  return slugs;
};
