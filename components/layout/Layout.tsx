import { IComponentProps } from '../../interfaces';
import Foooter from './Foooter';
import Navbar from './Navbar';

const Layout = ({ children }: IComponentProps) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='py-12 bg-white flex-grow'>{children}</main>
      <Foooter />
    </div>
  );
};

export default Layout;
