import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import { usePost } from '../../../hooks/usePost';
import Custom404 from '../../404';
import PostForm from '../../../components/ui/PostForm';

export default function UpdatePost() {
  const { query } = useRouter();
  const { id } = query;

  const { post, isLoading, isError } = usePost(
    id ? `/posts/update/${id}` : null
  );

  if (isLoading) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='font-bold text-2xl'>Cargando...</h1>
      </div>
    );
  }

  if (isError) {
    return <Custom404 />;
  }

  const onSubmit = async (value?: any) => {
    const response = await axios.put('/api/posts', value);
    console.log('response', response);
  }

  return (
    <>
      <Head>
        <title>Actualizar - Blog App</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <PostForm postData={post} onSubmit={onSubmit}/>
    </>
  );
}
