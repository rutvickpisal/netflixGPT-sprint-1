import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-6 absolute text-white bg-gradient-to-r from-black'>
      <span className='text-6xl font-bold'>{title}</span>
      <div className='py-6 text-lg w-1/4'>{overview}</div>
      <div className=''>
        <button className='bg-white p-3 px-10 rounded-md text-xl font-medium text-black mr-2 hover:opacity-80'>Play</button>
        <button className='bg-gray-500 p-3 px-10 rounded-md text-xl text-white bg-opacity-50 hover:opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle