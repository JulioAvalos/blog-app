import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import { usePost } from '../../../hooks/usePost';
import Custom404 from '../../404';
import PostForm from '../../../components/ui/PostForm';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

export default function UpdatePost() {

  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const { query } = useRouter();
  const { id } = query;

  const { post, isLoading, isError } = usePost(
    id ? `/posts/update/${id}` : null
  );

  if(!isLoggedIn && user?.role !== 'admin') {
    return <Custom404 />;
  }

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
    const response = await axios.put('/api/posts', {...value, _id: id});
    alert('Se ha guardado exitosamente los cambios');
  }

  return (
    <>
      <Head>
        <title>Actualizar - Blog App</title>
      </Head>
      <PostForm postData={post} onSubmit={onSubmit}/>
    </>
  );
}
