import React from 'react'

const Box = ({Name,ShortDesc}) => {
  return (
    <div className='mt-6'>
       <div className='shadow-xl'>
        <div className='w-full h-[200px] bg-gray-600 flex justify-center items-center'>
            <h1 className='text-white text-xl'>ADD IMAGE</h1>
        </div>

        <div className='px-2 py-3 space-y-3 '>
            <h1 className='font-bold'>{Name}</h1>
            <h1 className='text-sm h-[250px]'>{ShortDesc}</h1>
            <button className='border-2 border-gray-500 rounded-md px-2'>View</button>
        </div>
       </div>
    </div>
  )
}

export default Box


