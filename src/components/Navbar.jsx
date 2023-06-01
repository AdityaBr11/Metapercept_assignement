import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] flex justify-between items-center px-4 border-b-2 text-lg'>
      <div>
        <h1>Title</h1>
      </div>
      <div className='flex items-center gap-4'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Blog</h1>
        <h1>Contact</h1>
        <button className='border-2 border-blue-500 rounded-md px-4 py-1 text-blue-500'>Button</button>
      </div>
    </div>
  )
}

export default Navbar
