import React, { useState, useEffect } from 'react'
import ImageSets from './ImageSets'
import ImageButton from './ImageButton'
import CurrentSet from './CurrentSet'
import "./../../styling/gallery/galleryTitle.css";
import "./../../styling/gallery/gallery.css";


export default function ImageGallery({galleryData, isFirstGallery}) {
  const [currentSet, setCurrentSet] = useState(galleryData.sets[0])
  const [currentImg, setCurrentImg] = useState(currentSet.images[0])

  useEffect(() => {
    setCurrentImg(currentSet.images[0])
  }, [currentSet])

  function SelectImg(imgI) {
    setCurrentImg(currentSet.images[imgI])
  }

  function SelectSet(setI) {
    setCurrentSet(galleryData.sets[setI])
  }

  function HandleOnClick(imgI) {
    if(currentSet.images[imgI] != null) {
      SelectImg(imgI)
    }
  }

  function GetImgLink(imgI) {
    return currentSet.images[imgI] != null ? currentSet.images[imgI].src : ""
  }

  return (
    <div className='relative mb-40 flex flex-col items-center overflow-x-clip'>
      <div className='gallery-title-flex'>
        <h1 id={galleryData.title} className='font-redmyst'>
          {galleryData.title}
        </h1>

        <div className="title-cell-row">
          <div className="title-cell blank"></div>
          <div className="title-cell blank"></div>
          <div className="title-cell blank"></div>
          <div className="title-cell blank"></div>
          <div className="title-cell blank"></div>
          <div className="title-cell blank"></div>
          <div className="title-cell"></div>
          <div className="title-cell"></div>
          <div className="title-cell"></div>
          <div className="title-cell"></div>
          <div className="title-cell"></div>
          <div className="title-cell"></div>
          <div className="title-cell"></div>
        </div>
      </div>

      <div className='gallery'>
       <h3 className='gallery-title'>"{currentSet.title}"</h3>


        <div className="gallery-flex">
          
          <div className="gallery-top">
            <CurrentSet setData={currentSet} currentImg={currentImg} onSelectImg={(imgI) => SelectImg(imgI)} id="gallery-current"/>

            <ImageSets setsData={galleryData.sets} currentSetTitle={currentSet.title} onSelect={(setI) => SelectSet(setI)} />

          </div>


          <div className='gallery-bottom'>
            <div className='gallery-bottom-buttons'>
              {currentSet.images.map((img, i) => <ImageButton imgLink={GetImgLink(i)} isSelected={img === currentImg} onClick={() => HandleOnClick(i)} key={i}/>)}
            </div>
            {/* the description div should have the same height as the small images of current set */}
            
            <div className='gallery-bottom-information'>
              <p>{currentImg.description}</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
