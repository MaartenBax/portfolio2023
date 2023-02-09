import "./../../styling/menu/menuIcon.css";

export default function MenuIcon({showMenu, OnClick}) {
  return (
    <button id='nav-icon' className={(showMenu ? 'is-active' : '')} onClick={OnClick}>
      <div className='nav-bar top'></div>
      <div className='nav-bar mid'></div>
      <div className='nav-bar bot'></div>
    </button>
  )
}
