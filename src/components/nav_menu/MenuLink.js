import React from 'react'
import "./../../styling/menu/menuLink.css";

export default function MenuLink({text, href}) {
  return (
    <a className='menu-link' href={href}>
      <p className='font-redmyst'>{text}</p>
    </a>
  )
}
