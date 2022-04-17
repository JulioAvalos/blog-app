import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import AllPosts from '../../components/posts/PostList';
import { IPosts } from '../../interfaces';
import { posts } from '../../util/post-utils';

const AllPostsPage = ({ posts }: IPosts) => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    let delayDebounce: ReturnType<typeof setTimeout>;
    if (searchWord !== null || searchWord !== '') {
      delayDebounce = setTimeout(() => {
        const filtered = [...posts].filter((post) =>
          post?.title.toUpperCase().includes(searchWord.toUpperCase())
        );
        setFilteredPosts(filtered);
      }, 900);
    }
    return () => clearTimeout(delayDebounce);
  }, [searchWord]);

  return (
    <>
      <Head>
        <title>Publicaciones - Blog App</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-base text-stone-600 font-semibold tracking-wide uppercase'>
          Publicaciones
        </h2>

        <div className='py-5'>
          <input
            type='text'
            name='first-name'
            id='first-name'
            autoComplete='given-name'
            placeholder='Buscar una publicacion'
            className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm'
            value={searchWord}
            onChange={(event) => setSearchWord(event?.target.value)}
          />
        </div>

        <AllPosts posts={filteredPosts} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: posts,
    },
  };
};

export default AllPostsPage;
