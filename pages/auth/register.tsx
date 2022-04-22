import Head from 'next/head';
import { useContext, useState } from 'react';
import { FiKey } from 'react-icons/fi';
import { AuthContext } from '../../context';
import { useRouter } from 'next/router';
import { FiAlertCircle } from 'react-icons/fi';
import { signIn } from 'next-auth/react';

interface FormData {
  name    : string;
  email   : string;
  password: string;
}

export default function RegisterPage() {
  const router = useRouter();

  const { registerUser } = useContext(AuthContext);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState(false);

  // const onLoginUser = async () => {
    
  //   const isValidLogin = await registerUser(user, password);

  //   if (!isValidLogin) {
  //     setShowError(true);
  //     setTimeout(() => setShowError(false), 3000);
  //     return;
  //   }
    
  //   router.replace('/');
  // };

  const onRegisterForm = async() => {
        
    setShowError(false);
    const { hasError, message } = await registerUser(name, email, password);

    if ( hasError ) {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        return;
    }
    

    // await signIn('credentials',{ email, password });
    router.replace('/');

}


  return (
    <>
      <Head>
        <title>Register - Blog App</title>
      </Head>
      <div className='max-w-lg mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-base text-stone-600 font-semibold tracking-wide uppercase pb-4'>
          Registro de usuario
        </h2>
        <div>
          <label>Nombre</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Ingrese nombre'
            autoComplete='given-name'
            className={`appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm ${showError ? 'border-red-500' : 'border-gray-300'}`}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Ingrese email del usuario'
            autoComplete='given-mail'
            className={`appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm ${showError ? 'border-red-500' : 'border-gray-300'}`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            className={`appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm ${showError ? 'border-red-500' : 'border-gray-300'}`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='pt-6'>
          <button
          disabled={showError}
            className={`text-white rounded-full px-5 py-2 flex ${showError ? 'bg-stone-500': 'bg-cyan-500 hover:bg-cyan-400'}`}            
            onClick={onRegisterForm}
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
              Error no se pudo registrar el usuario!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
