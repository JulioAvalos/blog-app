import { IPosts } from '../../interfaces';
import PostCard from './Post';

const AllPosts = ({ posts }: IPosts) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {posts?.map(
        ({ id, title, urlSlug, image, createdAt, author, tags }, index) => (
          <PostCard
            key={`post-card-item-${index}`}
            id={id}
            title={title}
            urlSlug={urlSlug}
            image={image}
            createdAt={createdAt}
            author={author}
            tags={tags}
            index={index}
          />
        )
      )}
    </div>
  );
};

export default AllPosts;
