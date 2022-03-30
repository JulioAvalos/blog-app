import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { IPost } from '../../interfaces/index';

interface IPostDetailPageProps {
  post: IPost;
}

const PostDetailPage = ({ post }: IPostDetailPageProps) => {
  return (
    <>
      <Head>
        <title>Blog App - Post Detail </title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-black font-bold'>Detalle</h2>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.content}</p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  // const postData = getPostData(slug);
  return {
    props: {
      post: {
        id: 1,
        title: 'Mountain-1',
        content: 'lorem ipsum',
      },
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = [
    'Mountain-1',
    'Mountain-2',
    'Mountain-3',
    'Mountain-4',
    'Mountain-5',
    'Mountain-6',
  ];
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
