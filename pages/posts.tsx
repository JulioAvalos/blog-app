import { posts } from "../util/post-utils";

const Posts = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-base text-stone-600 font-semibold tracking-wide uppercase'>
        Publicaciones
      </h2>

      <div className='py-4'>
        <input
          type='text'
          name='first-name'
          id='first-name'
          autoComplete='given-name'
          placeholder='Buscar una publicacion'
          className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
        />
      </div>

      <div className='grid grid-cols-3 gap-10'>
        {posts?.map(({ id, title, description, image, tags }, index) => (
          <div
            key={`post-item-${index}`}
            className='max-w-xs rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:shadow-cyan-500/50 transition-all duration-200'
          >
            <img className='w-full' src={image} alt='Mountain' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl'>{title}</div>
              <div className="text-xs mb-2 text-stone-400 font-mono">2022-03-20 | 12:00 - Julio Avalos</div>
              <p className='text-gray-700 text-base truncate'>{description}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
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
    </div>
  );
};

export default Posts;
