import Link from 'next/link';
import { IPosts } from '../../interfaces';

const AllPosts = ({ posts }: IPosts) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {posts?.map(({ id, title, description, image, tags }, index) => (
        <div
          key={`post-item-${index}`}
          className='rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:shadow-black/30 transition-all duration-200'
        >
          <Link href={`/posts/${title}`}>
            <img
              className='w-full xs:h-[30vh] cursor-pointer'
              src={image}
              alt='Mountain'
            />
          </Link>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl hover:text-cyan-500 cursor-pointer'>
              <Link href={`/posts/${title}`}>{title}</Link>
            </div>
            <p className='text-gray-700 text-base text-sm mt-2'>
              {description}
            </p>
            <div className='text-xs font-mono flex mt-4 gap-4'>
              <div>
                <p className='text-black font-bold'>Julio Avalos</p>
              </div>
              <div>
                <p className='text-stone-400'>Marzo 29, 2022</p>
              </div>
            </div>
          </div>
          <div className='px-6 pb-2'>
            {tags?.map(({ id, tag }, subIndex) => (
              <span
                key={`post-item-${index}-tag-${subIndex}`}
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
