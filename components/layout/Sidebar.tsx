
import { useState } from 'react';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';

import { navigation } from '../../util/menu-util';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
        <button
          className='z-30 flex items-center cursor-pointer right-10 top-6 '
          onClick={() => setOpen(!open)}
        >
          <MdOutlineMenu color='white' size='2rem' />
        </button>
      ) : (
        <button
          className='text-xl text-white fixed top-4 right-4 z-40'
          onClick={() => setOpen(!open)}
        >
          <CgClose />
        </button>
      )}

      <div
        className={`flex flex-col top-0 right-0 fixed bg-stone-900 w-[45vw] h-full p-10 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300 z-30`}
      >
        <div className='self-center'>
          <h2 className='text-2xl text-white pb-3'>Menu</h2>
        </div>
        <ul>
          {navigation?.map(({ menu, href, current }, index) => (
            <li
              key={`menu-item-${index}`}
              className={`text-white py-2 ${current ? 'underline' : ''}`}
            >
              <Link href={href}>
                <a onClick={() => setOpen(false)}>{menu}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`bg-black opacity-50 fixed top-0 right-0 ${
          open ? 'w-full h-full' : ''
        } ease-in-out duration-200 z-20`}
      ></div>
    </>
  );
};

export default Sidebar;
