import Head from 'next/head';
import Link from 'next/link';

function Custom404() {
  return (
    <>
      <Head>
        <title>404 No se encontro el contenido - Blog App </title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <div className='flex flex-col items-center text-center'>
        <p className='text-7xl text-base text-stone-600 font-semibold tracking-wide uppercase'>
          404
        </p>
        <p className='text-lg text-base text-stone-600 font-semibold tracking-wide uppercase py-4'>
          Vaya cosa... El contenido que buscas no se encuentra o nunca existio
        </p>
        <p className='text-3xl text-base text-stone-600 font-semibold tracking-wide uppercase py-4'>
          ¯\_(ツ)_/¯
        </p>
        <div className='underline'>
          <Link href='/'>Volver a la pagina de inicio</Link>
        </div>
      </div>
    </>
  );
}

export default Custom404;
