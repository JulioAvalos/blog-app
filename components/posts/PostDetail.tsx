import Link from 'next/link';

interface IPostDetails {
  title: string;
  author?: string;
  createdAt: string;
  urlSlug?: string;
}

function PostDetails({
  title,
  author = '?',
  createdAt,
  urlSlug = 'not-found',
}: IPostDetails) {
  return (
    <div className='px-6 py-4'>
      <div className='font-bold text-xl hover:text-cyan-500 cursor-pointer'>
        <Link href={`/posts/${urlSlug}`}>{title}</Link>
      </div>
      <div className='text-xs font-mono flex mt-4 gap-4'>
        <div>
          <p className='text-black font-bold'>{author}</p>
        </div>
        <div>
          <p className='text-stone-400'>{createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
