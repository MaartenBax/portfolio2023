import React from 'react'
import ImageButton from './ImageButton'

export default function ImageSets({setsData, currentSetTitle, onSelect}) {
  function HandleOnClick(setI) {
    if(setsData[setI] != null) {
      onSelect(setI)
    }
  }

  function GetImgLink(setI, imgI) {
    return ((setsData[setI] != null && setsData[setI].images[imgI] != null) ? setsData[setI].images[imgI].src : "")
  }

  function CheckIfSetSelected(setI) {
    return (setsData[setI] != null && setsData[setI].title === currentSetTitle)
  }

  return (
    <>
      <ImageButton imgLink={GetImgLink(0, 0)} isSelected={CheckIfSetSelected(0)} onClick={() => HandleOnClick(0)}/>
      <ImageButton imgLink={GetImgLink(1, 0)} isSelected={CheckIfSetSelected(1)} onClick={() => HandleOnClick(1)}/>

      <ImageButton imgLink={GetImgLink(2, 0)} isSelected={CheckIfSetSelected(2)} onClick={() => HandleOnClick(2)}/>
      <ImageButton imgLink={GetImgLink(3, 0)} isSelected={CheckIfSetSelected(3)} onClick={() => HandleOnClick(3)}/>
    </>
  )
}
