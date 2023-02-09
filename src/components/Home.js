import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import ImageGallery from './image_slides/ImageGallery'
import Menu from './nav_menu/Menu';
import MenuIcon from './nav_menu/MenuIcon';
import "./../styling/base/main.css";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [imageGalleriesData, setImageGalleriesData] = useState(null)

  useEffect(() => {
    GetData()
    // console.log(imageGalleriesData)
  }, [])

  async function GetData() {
    const res = await fetch('/imageGalleriesData.json')
    const data = await res.json()
    // console.log(data)
    return setImageGalleriesData(data)
  }

  function ToggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <div> 
      {/* nav menu */}
      <MenuIcon showMenu={showMenu} OnClick={() => ToggleMenu()} />

      <Menu showMenu={showMenu} />

      {/* hero */}
      <Hero />

      {/* main content */}
      <main id="main">
        {imageGalleriesData && imageGalleriesData.map((data, i) => {
          return <ImageGallery galleryData={data} key={i} isFirstGallery={i===0} />
        })}
      </main>
    </div>
  )
}
