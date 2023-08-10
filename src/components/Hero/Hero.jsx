import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

function Hero (props) {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/*left side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial = {{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration:2,
              type:'spring'
            }}
            >
              Найти
              <br />Наиболее подходящую <br />Недвижимость
            </motion.h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">Найдите множество объектов недвижимости, которые подойдут именно вам</span>
            <span className="secondaryText">Забудьте обо всех трудностях с поиском жилья</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text"/>
            <button className="button">Поиск</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Премиум продукты</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Довольные Клиенты</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={29} />
                <span>+</span>
              </span>
               <span className="secondaryText">Награды</span>
            </div>
          </div>
        </div>

        {/*right side*/}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{x: "7rem", opacity:0}}
            animate={{x: 0, opacity:1}}
            tranisition ={{
              duration:2,
              type: "spring"
            }}
          >
            <img src="/hero-image.png" alt=""/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero