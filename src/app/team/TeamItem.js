import Link from 'next/link'
import React from 'react'

const TeamItem = ({name, designation, mobile, email, listingsLink, image, office}) => {
  return (
    <div className='w-full flex flex-col items-center justify-start bg-[#f7f7f7] rounded-md overflow-hidden
                    md:flex-row md:items-start '>
        <img src={image} alt="" className='h-[300px] object-contain ' />
        <div className='w-full p-7 '>
          <h3 className='font-semibold text-lg'>{name}</h3>
          <p className='text-sm text-gray'>{designation}</p>
          {office && (
            <p className='text-gray italic text-xs'>{office}</p>
          )}
          <div className='mt-5 flex flex-col items-start w-full border-b-2 border-white py-1'>
              <h3 className='font-semibold'>Mobile:</h3>
              <p>{mobile}</p>
          </div>
          <div className='mt-2 flex flex-col items-start w-full border-b-2 border-white py-1'>
              <h3 className='font-semibold'>Email:</h3>
              <p>{email}</p>
          </div>          
        </div>
    </div>
  )
}

export default TeamItem