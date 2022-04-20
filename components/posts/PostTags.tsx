interface IPostTags {
  tags?: string[];
}

function PostTags({ tags = [] }: IPostTags) {
  return (
    <div className='px-6 pb-2'>
      {tags?.map((value, subIndex) => (
        <span
          key={`post-item-tag-${subIndex}`}
          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
        >
          {value}
        </span>
      ))}
    </div>
  );
}

export default PostTags;
