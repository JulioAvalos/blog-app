import axios from 'axios';
import Head from 'next/head';
import PostForm from '../../components/ui/PostForm';
import { usePost } from '../../hooks/usePost';

export default function CreatePost() {

  const onSubmit = async (values: any) => {
    const response = await axios.post('/api/posts', values);
    console.log('response', response);
  }

  return (
    <>
      <Head>
        <title>Nuevo - Blog App</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <PostForm onSubmit={onSubmit}/>
      </div>
    </>
  );
}
