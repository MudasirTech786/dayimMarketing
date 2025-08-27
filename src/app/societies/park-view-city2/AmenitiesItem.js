import React from 'react'

const AmenitiesItem = ({logo, title}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 pb-10'>
        <img src={logo} className='h-[60px]' />
        <h3 className='font-bold text-2xl text-second text-center'>{title}</h3>                
    </div>
  )
}

export default AmenitiesItem