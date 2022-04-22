import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { dbPosts } from '../../database';
import { IPost } from '../../interfaces/index';
import { NotFoundImage } from '../../util/constants';

type IPostDetailPageProps = {
  post: IPost;
};

const PostDetailPage = ({ post }: IPostDetailPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title} - Blog App</title>
      </Head>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link href='/posts'>
          <div className='flex underline cursor-pointer '>
            <FaArrowLeft size='20' />
            <p className='ml-2 self-center'>Volver a las publicaciones</p>
          </div>
        </Link>
        <div className='flex flex-col items-center pt-4'>
          <h2 className='text-5xl text-stone-800 font-bold pb-10'>
            {post.title}
          </h2>
          <Image
            src={post.image || NotFoundImage}
            width={500}
            height={300}
            alt={post.title}
          />
          <p className='text-stone-500 pt-2 font-mono '>
            Autor: {post.author} - {post.createdAt}
          </p>
        </div>
        <div className='text-black font-semibold pt-5'>
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string };
  const post = await dbPosts.getPostBySlug(slug);

  if (!post) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await dbPosts.getAllPostSlugs();

  return {
    paths: slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export default PostDetailPage;
