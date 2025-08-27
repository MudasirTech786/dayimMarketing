import React from 'react'

const BoxItem = ({heading, text, type}) => {
  return (
    <div className={`${type == 'one' ? 'bg-white hover:bg-second' : 'bg-second hover:bg-white'}  shadow-md py-5 px-10  group cursor-pointer `}>
        <h3 className={`${type == 'one' ? 'group-hover:text-white' : 'group-hover:text-second text-white'} font-semibold text-xl `}>{heading}</h3>
        <p className={`${type == 'one' ? 'group-hover:text-white text-gray' : 'group-hover:text-second text-white'} mt-5 `}>{text}</p>
    </div>
  )
}

export default BoxItem