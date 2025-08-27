import Link from 'next/link'
import React from 'react'

const DiscoverSection = ({heading, subHeading, link, linkTitle, bgImage, mapLink, bgVideo }) => {
  return (
    <div className="h-[400px] w-full relative
                      md:h-[500px] lg:h-[700px]">
        <div className="absolute h-full w-[95%] flex items-center justify-start z-10
                md:w-[40%]">
            <div className="h-full w-[65%] bg-white bg-opacity-0 md:bg-opacity-70">

            </div>
            <div className="h-[400px] w-[400px] bg-black bg-opacity-70 md:bg-opacity-100 ml-[-200px] p-16 text-white">
                <h2 className="text-2xl md:text-4xl font-semibold">{heading}</h2>
                <p className="text-md mt-5 mb-10">{subHeading} </p>
                <div className='flex flex-col items-center justify-center gap-3'>
                    { link && (
                        <Link href={link} target='_blank' className=" py-3 w-full text-center px-8 rounded-md border border-white hover:scale-110 hover:bg-white hover:text-black transition">{linkTitle}</Link>
                    )}
                    { mapLink && (
                        <Link href={mapLink} target='_blank' className=" py-3 w-full text-center px-8 rounded-md border border-white hover:scale-110 hover:bg-white hover:text-black transition">View Map</Link>
                    )}
                </div>
            </div>

        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">                        
            {bgImage && (
                <img 
                    src={bgImage} 
                    alt="" 
                    className="w-full h-full object-cover object-center " 
                />                        
            )}
            {bgVideo && (
                <video 
                    src={bgVideo} 
                    autoPlay 
                    loop 
                    muted 
                    className='w-full h-full object-cover object-center ' 
                />                         
            )}
        </div>
    </div>
  )
}

export default DiscoverSection