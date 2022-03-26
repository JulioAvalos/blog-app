// import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from "next/link";
import classes from '../../styles/Nav.module.css';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Navbar = () => {
  return (
    <header className="py-4 px-4 flex justify-between bg-stone-900">
      <Link href='/'>
        <a className="text-white flex justify-center">
          <img src="/images/keyboard.svg" className="h-10 w-25"/>
          <p className="self-center">Blog</p>
        </a>
      </Link>
      <nav>
        <ul className="flex justify-between bg-stone-900 gap-4">
          <li className="text-white">
            <Link href='/posts'>Posts</Link>
          </li>
          <li className="text-white">
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
