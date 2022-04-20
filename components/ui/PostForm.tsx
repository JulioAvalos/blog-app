import Image from 'next/image';
import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { IPost } from '../../interfaces';

interface IPostForm {
  postData?: IPost | any;
  onSubmit: (value: any) => void;
}

const imageList = [
  '/images/placeholders/code.jpg',
  '/images/placeholders/angular.jpg',
  '/images/placeholders/java.jpg',
  '/images/placeholders/javascript.jpg',
  '/images/placeholders/nodejs.jpg',
  '/images/placeholders/react.jpg',
];

export default function PostForm({ postData, onSubmit }: IPostForm) {
  const [title, setTitle] = useState(postData?.title || '');
  const [author, setAuthor] = useState(postData?.author || '');
  const [content, setContent] = useState(postData?.content || '');
  const [image, setImage] = useState(postData?.image || '');

  const handleSubmit = () => {
    const formData = {
      title,
      author,
      content,
      image,
    };
    onSubmit(formData);
  };

  const imageSelected = () => {
    if (image) return imageList.find((value) => value.includes(image));
    else {
      return '/images/placeholders/code.jpg';
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='font-bold text-2xl pb-2'>
        {postData ? 'Actualizar Publicacion' : 'Nueva Publicacion'}
      </div>
      <div>
        <label>Titulo</label>
        <input
          type='text'
          name='first-name'
          id='first-name'
          autoComplete='given-name'
          placeholder='Titulo'
          className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm'
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
        />
      </div>
      <div>
        <label>Autor:</label>
        <input
          type='text'
          name='first-name'
          id='first-name'
          autoComplete='given-name'
          placeholder='Titulo'
          className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm'
          value={author}
          onChange={(event) => setAuthor(event?.target.value)}
        />
      </div>
      <div>
        <label>Contenido:</label>
        <textarea
          name='first-name'
          id='first-name'
          autoComplete='given-name'
          placeholder='Titulo'
          rows={5}
          className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm'
          value={content}
          onChange={(event) => setContent(event?.target.value)}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <select
          className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm'
          value={image}
          onChange={(event) => setImage(event?.target.value)}
        >
          <option value='/images/placeholders/code.jpg'>Code</option>
          <option value='/images/placeholders/angular.jpg'>Angular</option>
          <option value='/images/placeholders/java.jpg'>Java</option>
          <option value='/images/placeholders/javascript.jpg'>
            JavaScript
          </option>
          <option value='/images/placeholders/nodejs.jpg'>NodeJS</option>
          <option value='/images/placeholders/react.jpg'>React</option>
        </select>
      </div>
      <div className='pt-4'>
        <Image
          src={imageSelected()}
          width={400}
          height={200}
          alt='image-sample'
        />
      </div>
      <div className='pt-6'>
        <button
          className='bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-5 py-2 flex'
          onClick={handleSubmit}
        >
          <div className='self-center pr-2'>
            <FaSave />
          </div>
          <p>Guardar</p>
        </button>
      </div>
    </div>
  );
}
