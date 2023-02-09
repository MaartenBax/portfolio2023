import React from 'react'
import MenuLink from './MenuLink'
import "./../../styling/menu/menu.css";

export default function Menu({showMenu}) {
  let conditionalClass = showMenu ? 'show' : ''

  return (
    <div id='nav-menu' className={conditionalClass}>
      <div className='nav-menu-flex'>
        <MenuLink text={"Home"} href={"#"} />
        <MenuLink text={"3D Design"} href={"#3D"} />
        <MenuLink text={"Graphic Design"} href={"#Graphic Design"} />
        <MenuLink text={"Illustration"} href={"#Illustration"} />
        <MenuLink text={"Photo"} href={"#Photo"} />
      </div>

      <div className='nav-menu-flex'>
        <MenuLink text={"About"} href={"#"} />
        <MenuLink text={"Contact"} href={"#"} />
      </div>
    </div>
  )
}
