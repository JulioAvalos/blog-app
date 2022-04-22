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
      return getPosts(req, res);

    case 'POST':
      return savePost(req, res);

    case 'PUT':
      return updatePost(req, res);

    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getPosts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const { search } = req.query;

  let posts = [];

  if (search) {
    posts = await Post.find({ title: { $regex: `${search}`, $options: 'i' } })
      .select('title image author createdAt content tags slug _id')
      .lean();
  } else {
    posts = await Post.find()
      .select('title image author createdAt content tags slug _id')
      .lean();
  }

  await db.disconnect();

  return res.status(200).json(posts);
};

const savePost = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  console.log('entro a guardar post')
  const { title } = req.body;
  
  const dt = new Date();
  const slugGenerator = title.toLowerCase().replace(/\s+/g, '-');
  const formattedDate = dt.toLocaleDateString('ES-es', {day: 'numeric', month: 'long', year: 'numeric'});
  
  const body = {
    ...req.body,
    createdAt: formattedDate,
    slug: slugGenerator,
    tags: ['programacion', 'tecnologia']
  }

  const post = new Post({
    ...body
  });

  await post.save();

  await db.disconnect();

  return res.status(200).json(body);
};


const updatePost = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const { title, _id } = req.body;
  
  const dt = new Date();
  const slugGenerator = title.toLowerCase().replace(/\s+/g, '-');
  const formattedDate = dt.toLocaleDateString('ES-es', {day: 'numeric', month: 'long', year: 'numeric'});
  
  const body = {
    ...req.body,
    createAt: formattedDate,
    slug: slugGenerator,
    tags: ['programacion', 'tecnologia']
  }

  await Post.findOneAndUpdate({ _id }, body, { new: true});

  await db.disconnect();

  return res.status(200).json(body);
};
