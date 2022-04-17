import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Acerca de mi - Blog App</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-base text-stone-600 font-semibold tracking-wide uppercase'>
          Contacto
        </h2>
      </div>
    </>
  );
};

export default Contact;
