import React from 'react';
import { IDateFormat } from '../../interfaces';

const Foooter = () => {
  const options: IDateFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div className='flex justify-center bg-stone-900 py-4'>
      <h2 className='text-white'>
        Blog app - {new Date().toLocaleDateString('es-ES', options)}
      </h2>
    </div>
  );
};

export default Foooter;
