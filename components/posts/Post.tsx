import Image from 'next/image';
import Link from 'next/link';
import PostDetails from './PostDetail';
import PostTags from './PostTags';
import { FiEdit } from 'react-icons/fi';

interface IPostCard {
  id: string;
  title: string;
  urlSlug?: string;
  image?: string;
  createdAt: string;
  author?: string;
  tags?: string[];
  index: number;
}

function PostCard({
  id,
  title,
  urlSlug,
  image,
  createdAt,
  author,
  tags,
  index,
}: IPostCard) {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:shadow-black/30 transition-all duration-200'>
      <Link href={`/posts/${urlSlug}`}>
        <div>
          <Image
            className='cursor-pointer'
            src={`${image}`}
            alt={`img-${title}`}
            height={400}
            width={700}
          />
        </div>
      </Link>
      <PostDetails
        title={title}
        author={author}
        createdAt={createdAt}
        urlSlug={urlSlug}
      />
      <PostTags tags={tags} />
      <div className='px-6 pb-4'>
        <Link href={`/posts/update/${id}`}>
        <button className='bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-5 py-2 flex'>
          <div className='self-center pr-2'>
            <FiEdit />
          </div>
          <p>Actualizar</p>
        </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
