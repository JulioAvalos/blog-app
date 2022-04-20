import { IPosts } from '../../interfaces';
import PostCard from './Post';

const AllPosts = ({ posts }: IPosts) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {posts?.map(
        ({ _id, title, slug, image, createdAt, author, tags }, index) => (
          <PostCard
            key={`post-card-item-${index}`}
            id={_id}
            title={title}
            urlSlug={slug}
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
