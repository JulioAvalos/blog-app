import { ITag } from '../../interfaces';

interface IPostTags {
  index: number;
  tags?: ITag[];
}

function PostTags({ tags = [], index }: IPostTags) {
  return (
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
  );
}

export default PostTags;
