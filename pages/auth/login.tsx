import Head from 'next/head';
import { signIn, getSession, getProviders } from 'next-auth/react';
import { useContext, useEffect, useState } from 'react';
import { FiKey } from 'react-icons/fi';
import { AuthContext } from '../../context';
import { useRouter } from 'next/router';
import { FiAlertCircle } from 'react-icons/fi';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();

  const { loginUser } = useContext(AuthContext);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const [providers, setProviders] = useState<any>({});

  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);

  const onLoginUser = async (event: any) => {
    event.preventDefault();
    setShowError(false);
    await signIn('credentials', {
      email: user, 
      password
    });
  };

  return (
    <>
      <Head>
        <title>Login - Blog App</title>
      </Head>
      <div className='max-w-lg mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-base text-stone-600 font-semibold tracking-wide uppercase pb-4'>
          Login Blog
        </h2>
        <form>
          <div>
            <label>Usuario</label>
            <input
              type='text'
              id='email'
              name='email'
              autoComplete='given-name'
              placeholder='Ingrese usuario'
              className={`appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm ${
                showError ? 'border-red-500' : 'border-gray-300'
              }`}
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
          </div>
          <div className='pt-4'>
            <label>Password</label>
            <input
              type='password'
              name='pass'
              id='pass'
              placeholder='Ingrese clave'
              autoComplete='current-password'
              className={`appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm ${
                showError ? 'border-red-500' : 'border-gray-300'
              }`}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className='pt-6'>
            <Link href={"/auth/register"}>
              <p className='underline cursor-pointer'>Registrarte con correo</p>
            </Link>
          </div>
          <div className='pt-6'>
            <button
              disabled={showError}
              className={`text-white rounded-full px-5 py-2 flex ${
                showError ? 'bg-stone-500' : 'bg-cyan-500 hover:bg-cyan-400'
              }`}
              onClick={onLoginUser}
            >
              <div className='self-center pr-2'>
                <FiKey />
              </div>
              <p>Guardar</p>
            </button>
          </div>
          {showError && (
            <div className='mt-6 bg-red-500 rounded-full flex flex-row justify-center h-10'>
              <div className='self-center mr-2'>
                <FiAlertCircle size='20' color='white' />
              </div>
              <p className='text-white font-semibold self-center'>
                Credenciales incorrectas!
              </p>
            </div>
          )}
          <hr className='mt-4'></hr>
          <div className='mt-6'>
            {Object.values(providers).map((provider: any) => {
              if (provider.id === 'credentials')
                return <div key='credentials'></div>;

              return (
                <span
                  key={provider.id}
                  className={`text-white rounded-full flex justify-center px-5 py-2 flex ${
                    showError ? 'bg-stone-500' : 'bg-cyan-500 hover:bg-cyan-400'
                  }`}
                  onClick={() => signIn(provider.id)}
                >
                  <p>Ingresar con {provider.name}</p>
                </span>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });

  const { p = '/' } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
