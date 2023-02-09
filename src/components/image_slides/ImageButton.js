import React from 'react'
import SquareImage from './SquareImage'

export default function ImageButton({imgLink, isSelected, onClick}) {
  function HasLink() {
    return imgLink !== ""
  }

  let conditionalClass = 'relative ';

  if(HasLink()) {
    conditionalClass = isSelected ? 'scale-95' : 'scale-100 hover:scale-95 transition-transform';
  }

  return (
    <div className={'rightImg ' + conditionalClass} onClick={onClick}>
      <SquareImage imgLink={imgLink}/>
      <div className={'galleryImage absolute top-0 w-full h-full rounded-xl bg-black bg-opacity-60 hover:bg-opacity-0 transition-all' +
        (!HasLink() || isSelected ? ' bg-opacity-0' : '')}>
      </div>
    </div>
  )
}
