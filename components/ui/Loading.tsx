export function Loading() {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg'>
      <div className='w-full xs:h-[30vh] animate-pulse bg-stone-400 h-56'></div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl animate-pulse bg-stone-400 h-4'></div>
      </div>
      <div className='flex gap-4 animate-pulse bg-stone-400 h-2 mx-6'></div>

      <div className='px-6 pb-2 mt-4 animate-pulse'>
        {['', '', ''].map((value, index) => (
          <span
            key={`post-item-tag-loading-${index}`}
            className='inline-block bg-stone-400 rounded-full px-3 py-1 mr-2 mb-2 w-16 h-4'
          ></span>
        ))}
      </div>
    </div>
  );
}
