// import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

interface INavigation {
  menu: string;
  href: string;
  current: boolean;
}

const navigation: INavigation[] = [
  { menu: 'Publicaciones', href: '/posts', current: false },
  { menu: 'Contacto', href: '/contact', current: false },
];

const Navbar = () => {
  return (
    <header className='py-4 px-4 flex justify-between bg-stone-900'>
      <Link href='/'>
        <a className='text-white flex justify-center'>
          <img src='/images/keyboard.svg' className='h-10 w-25' />
          <p className='self-center'>Blog</p>
        </a>
      </Link>
      <nav className='self-center'>
        <ul className='flex justify-center gap-6'>
          {navigation?.map(({ menu, href, current }, index) => (
            <li
              key={`menu-item-${index}`}
              className={`text-white ${current ? 'underline' : ''}`}
            >
              <Link href={href}>{menu}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
