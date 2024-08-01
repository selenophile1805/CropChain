import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import Identicons from 'react-identicons'
const ProjectDetails = () => {
  return (
    <div className='py-24 px-6 flex justify-center'>
    <div className='flex justify-center flex-col md:w-2/3'> 
     <div className='flex justify-start items-center sm:space-x-4 flex-wrap '>
     <img src="https://images.unsplash.com/photo-1721932547078-38a815bb6b17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D" alt="Project Title" className=' rounded-xl h-64 w-full sm:w-1/3f object-cover' />

     <div className='flex-1 sm:py-0 py-4'>
     <div className='flex flex-col justify-start flex-wrap'>
     <h5 className='text-gray-900 text-sm font-medium mb-2 '>Project Title </h5>
     <small className='text-gray-500 '> 3 days left </small>
     </div>

     <div className='flex justify-between items-center w-full pt-1'>
     <div className='flex justify-start space-x-2 mb-3'>
     <Identicons className=" rounded-full shadow-md" string="0x9e...13af" size={15}/>
        <small className='text-gray-700'>0x9e...13af</small>
        <small className='text-gray-500 font-bold'>{16} backings</small>
     </div>

     <div className='font-bold'>
        <small className='text-gray-500 '>
            open
        </small>
     </div>

     </div>
        
     </div>
     </div>
     <p className='text-sm font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, reprehenderit enim quas illo laborum deleniti fugit quo! Iure sed saepe, tempora laboriosam vitae molestiae ipsum eius? Laboriosam beatae quod quia.</p>
     <div className='w-full bg-gray-300 mt-4'>
     <div className='bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-1' style={{width:"50%"}}></div>
     </div>

     <div className='flex justify-between items-center font-bold mt-2 '>
        <small>{3} Eth Raised</small>
        <small className='flex justify-start items-center'>
        <FaEthereum />
            <span>{10} Eth</span>
        </small>
     </div>

     <div className='justify-start items-center space-x-2 mt-4'>
        <button type='button' className='inline-block px-6 py-2.5 border  border-red-400 text-white front-size-medium text-xs leading-tight uppercase rounded-full shadow-medium bg-green-500 hover:bg-red-500 hover:text-white'>Back Project</button>
        <button type='button' className='inline-block px-6 py-2.5 border  border-red-400 text-white front-size-medium text-xs leading-tight uppercase rounded-full shadow-medium bg-gray-500 hover:bg-red-500 hover:text-white'>Edit </button>
        <button type='button' className='inline-block px-6 py-2.5 border  border-red-400 text-white front-size-medium text-xs leading-tight uppercase rounded-full shadow-medium bg-red-500 hover:bg-red-500 hover:text-white'>Delete</button>
        <button type='button' className='inline-block px-6 py-2.5 border  border-red-400 text-white front-size-medium text-xs leading-tight uppercase rounded-full shadow-medium bg-orange-500 hover:bg-red-500 hover:text-white'>Payout</button>
    </div>

    </div>
</div>
  )
}

export default ProjectDetails
