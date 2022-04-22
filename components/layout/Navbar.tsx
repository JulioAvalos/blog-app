import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { navigation } from '../../util/menu-util';
import Sidebar from './Sidebar';

const Navbar = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className='py-4 px-4 flex justify-between bg-stone-900'>
      <Link href='/'>
        <a className='text-white flex justify-center'>
          <img src='/images/keyboard.svg' className='h-10 w-25' />
          <p className='self-center'>Blog</p>
        </a>
      </Link>
      <nav className='invisible md:visible self-center'>
        <ul className='flex justify-center gap-6'>
          {navigation
            ?.filter(({ menu }) => !menu.includes('Inicio'))
            .map(({ menu, href, current }, index) => (
              <li
                key={`menu-item-${index}`}
                className={`text-white ${current ? 'underline' : ''}`}
              >
                <Link href={href}>{menu}</Link>
              </li>
            ))}
          {isLoggedIn ? (
            <li className={`text-white`} onClick={logout}>
              <a className='cursor-pointer'>Logout</a>
            </li>
          ) : (
            <li className={`text-white`}>
              <Link href='/auth/login'>Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <nav className={`md:hidden self-center`}>
        <Sidebar />
      </nav>
    </header>
  );
};

export default Navbar;
