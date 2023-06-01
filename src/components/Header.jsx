import React from 'react'

const Header = () => {
  return (
    <div className='mt-4 border-2 bg-gradient-to-r from-blue-300 to-blue-900 h-[280px] text-white flex flex-col justify-center items-center space-y-3 '>
      <h1 className='text-3xl'>Title</h1>
      <h1 className='w-[60%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis quas nesciunt aperiam labore, deleniti non maxime, alias eveniet magnam excepturi modi ab qui minus sunt nihil exercitationem veniam recusandae?</h1>
      <button className='bg-white px-3 py-1 text-black rounded-md'>Read More</button>
    </div>
  )
}

export default Header
