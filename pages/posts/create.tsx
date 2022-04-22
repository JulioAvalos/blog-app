import axios from 'axios';
import Head from 'next/head';
import Router from 'next/router';
import { useContext } from 'react';
import PostForm from '../../components/ui/PostForm';
import { AuthContext } from '../../context';
import Custom404 from '../404';
import { useRouter } from 'next/router';

export default function CreatePost() {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  if (!isLoggedIn) {
    return <Custom404 />;
  }

  const onSubmit = async (values: any) => {
    const response = await axios.post('/api/posts', values);
    alert('Se ha guardado exitosamente los cambios');
    router.push('/posts');
  };

  return (
    <>
      <Head>
        <title>Nuevo - Blog App</title>
      </Head>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <PostForm onSubmit={onSubmit} />
      </div>
    </>
  );
}
