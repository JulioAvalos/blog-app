import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from './layout/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className='py-12 bg-white'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
