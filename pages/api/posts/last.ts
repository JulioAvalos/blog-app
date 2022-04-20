import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IPost } from '../../../interfaces';
import Post from '../../../model/Post';

type Data = { message: string } | IPost[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getLastPost(req, res);

    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getLastPost = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const post = await Post.find().sort({$natural:-1}).limit(1);

  await db.disconnect();

  if (!post) {
    return res.status(404).json({
      message: 'Post no encontrado',
    });
  }

  return res.status(200).json(post);
};
