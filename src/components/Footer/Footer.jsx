import React from 'react'
import "./Footer.css"

function Footer (props) {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">

        {/*left side*/}
        <div className="flexColStart f-left">
          <img src="/logo2.png" alt="logo" width={120}/>

          <span className="secondaryText">
            Наше мнение заключается в том, <br />
            чтобы создать для всех людей лучшее место для жизни
          </span>
        </div>

        {/*right side*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Информация</span>
          <span className="secondaryText">г.Грозный, ул. Неизвестная 776</span>

          <div className="flexCenter f-menu">
            <span>Особенности</span>
            <span>Сервисы</span>
            <span>Продукты</span>
            <span>О нас</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer