import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PostCard from '../components/posts/Post';
import { usePosts } from '../hooks/usePosts';
import { IPost } from '../interfaces';
import { features } from '../util/feature-util';
import { posts } from '../util/post-utils';

const Home: NextPage = () => {
  // const lastPost: IPost = posts.slice(-1)[0];

  const { posts, isLoading } = usePosts('/posts/last');

  return (
    <>
      <Head>
        <title>Inicio - Blog App</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-stone-600 font-semibold tracking-wide uppercase'>
            Blog de programacion
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Espacio para casos de uso
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Noticias y tendencias de tecnologia y en el ecosistema de la
            programacion
          </p>
        </div>
        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map(({ name, icon, description }) => (
              <div key={name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-stone-700 text-white'>
                    <img aria-hidden='true' src={icon} alt={name} />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {description}
                </dd>
              </div>
            ))}
          </dl>
          <div>
            <p className='flex text-center mt-4 text-xl text-gray-700 font-bold'>
              Ultima publicacion
            </p>
            <div className='flex justify-center pt-5'>
              <div className='w-96'>
                {posts && posts[0] && (
                  <PostCard
                    id={posts[0]._id}
                    title={posts[0].title}
                    urlSlug={posts[0].slug}
                    image={posts[0].image}
                    createdAt={posts[0].createdAt}
                    author={posts[0].author}
                    tags={posts[0].tags}
                    index={1}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
