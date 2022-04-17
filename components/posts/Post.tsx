import Image from 'next/image';
import Link from 'next/link';
import { ITag } from '../../interfaces';
import PostDetails from './PostDetail';
import PostTags from './PostTags';

interface IPostCard {
  id: number;
  title: string;
  urlSlug?: string;
  image?: string;
  createdAt: string;
  author?: string;
  tags?: ITag[];
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
      <PostTags index={index} tags={tags} />
    </div>
  );
}

export default PostCard;
