import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltLeft } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

function Header (props) {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() =>{
            setMenuOpened(false)
          }}
        >
          <div className="flexCenter h-menu"
          style={getMenuStyles(menuOpened)}
          >
            <a href="">Резиденции</a>
            <a href="">Наше значение</a>
            <a href="">Связаться с нами</a>
            <a href="">Начать</a>
            <button className="button">
              <a href="">Контакт</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltLeft />
        </div>
      </div>
    </section>
  )
}

export default Header