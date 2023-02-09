import React from 'react'

export default function SquareImage({imgLink}) {
  return (
    <div className='currentImg aspect-square bg-neutral-400 shadow-lg rounded-2xl'>
      {imgLink !== "" && (
        <img className='rounded-xl galleryImage' src={imgLink} alt="" />
      )}
    </div>
  )
}
