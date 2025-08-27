import Image from 'next/image'
import React from 'react'

const ImageGallery = ({images}) => {
  return (
    <div className='w-[80%] mx-auto'>
        <h2 className='text-center text-4xl text-black hover:text-second py-10 font-bold'>Gallery</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            { images.map((item) => (
              <Image 
                src={item} 
                height={400}
                width={400}
                className="object-cover object-center"
                key={item}
                alt=''
              />                
            ))}
        </div>
            
    </div>
  )
}

export default ImageGallery