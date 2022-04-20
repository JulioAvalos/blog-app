import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { IPost } from '../../../../interfaces';
import Post from '../../../../model/Post';
import { ObjectId } from 'mongoose';

type Data = { message: string } | IPost;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getPostsById(req, res);

    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getPostsById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();
  const { id } = req.query;
  const post = await Post.findById({ _id: id }).lean();

  await db.disconnect();

  if (!post) {
    return res.status(404).json({
      message: 'Post no encontrado',
    });
  }

  return res.status(200).json(post);
};
