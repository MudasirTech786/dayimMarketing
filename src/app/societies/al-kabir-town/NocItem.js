import Link from 'next/link'
import React from 'react'

const NocItem = ({title, link, imageUrl, year}) => {
  return (
    <Link href={link} className=' py-5 px-10 h-[250px] flex flex-col items-center justify-center hover:scale-110 transition space-x-5'>
          <img src={imageUrl}  alt="" className='h-[100px]' />
          <p className='text-sm text-white  font-bold mt-2'>{year}</p>
          <h3 className='font-bold text-sm  text-second '>{title}</h3>                      
    </Link>
  )
}

export default NocItem