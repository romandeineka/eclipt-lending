import Image from 'next/image';
import React from 'react';
import picture from '@/public/Picture/Image.png';

const Picture = () => {
  return (
    <div className='px-4 mb-10 lg:px-20 lg:mb-[180px]'>
      <Image className='lg:w-[100%]' src={picture} alt='programing'/>
    </div>
  );
}

export default Picture;
