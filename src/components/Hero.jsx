import React from 'react'

const Hero = () => {
  return (
    <div className='py-24 px-6 text-center bg-white text-gray-800 '>
      <h1 className='text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12'>
      <span className='capitalize '>
      Empowering Farmers, One Block at a Time 
        <br />
       <span className='uppercase text-green-600'>CropChain.</span>
      </span></h1>
        <div className='justify-center items-center space-x-2'>
        <button type='button' className='inline-block px-6 py-2.5 border  border-red-400 text-white front-size-medium text-xs leading-tight uppercase rounded-full shadow-medium bg-red-500 hover:bg-red-500 hover:text-white'>Add Districts</button>
        <button type='button' className='inline-block px-6 py-2.5 border  border-red-400 text-red-600 front-size-medium text-xs leading-tight uppercase rounded-full shadow-medium bg-transparent hover:bg-red-500 hover:text-white'>Back Districts</button>
        </div>

        <div className='flex justy-center items-center mt-10'>
            <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className='text-lg font-bold text-green-900 leading-5'>{0}</span>
            <span >Districts</span>
            </div>

            <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className='text-lg font-bold text-green-900 leading-5'>{0}</span>
            <span >Backings</span>
            </div>

            <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className='text-lg font-bold text-green-900 leading-5'>{0} ETH</span>
            <span >Donated</span>
            </div>


        </div>
    </div>
  )
}

export default Hero
