import { useEffect, useState } from 'react';
import Head from 'next/head';
import AllPosts from '../../components/posts/PostList';
import { usePosts } from '../../hooks/usePosts';
import { Loading } from '../../components/ui/Loading';
import { CgFileAdd } from 'react-icons/cg';
import Link from 'next/link';

const AllPostsPage = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  const { posts, isLoading } = usePosts(
    filter ? `/posts?search=${filter}` : '/posts'
  );

  useEffect(() => {
    let delayDebounce: ReturnType<typeof setTimeout>;
    if (searchWord !== null || searchWord !== '') {
      delayDebounce = setTimeout(() => {
        setFilter(searchWord);
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
        <div className='pt-2'>
          <Link href={`/posts/create`}>
            <button className='bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-5 py-2 flex'>
              <div className='self-center pr-2'>
                <CgFileAdd />
              </div>
              <p>Agregar</p>
            </button>
          </Link>
        </div>
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
        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {['', '', '', '', '', ''].map((value, index) => (
              <Loading key={`loading-${index}`} />
            ))}
          </div>
        ) : (
          <AllPosts posts={posts} />
        )}
      </div>
    </>
  );
};

export default AllPostsPage;
