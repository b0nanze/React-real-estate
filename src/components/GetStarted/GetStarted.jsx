import React from 'react'
import "./GetStarted.css"
function GetStarted (props) {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Начать с Homyz</span>
          <span className="secondaryText">
            Подпишитесь и найдите супер привлекательную цену для вас!
            <br />
            Не затягивайте с поиском жилья
          </span>
           <button className="button">
             <a href="mailto:iumkhaev@gmail.com">Начать</a>
           </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted