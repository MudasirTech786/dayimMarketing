import Link from 'next/link'
import React from 'react'

const HomeSlider2Item = ({image, name, designation, office}) => {
  return (
    <Link href={"/team"}>
        <div className="w-full h-full flex flex-col items-center justify-center">                        
            <div className='h-[85%] w-full'>
                <img 
                    src={image} 
                    alt="" 
                    className="h-full w-full object-contain object-top " 
                />
            </div> 
            <div className='text-center'>
                <h3 className="text-xl text-gray mt-2">{name}</h3>                       
                <p>{designation}</p>
                {office && (
                    <p className='italic text-xs'>{office}</p>
                )}
            </div>
        </div>
    </Link>
  )
}

export default HomeSlider2Item