import React from 'react'
import "./Contact.css"
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

function Contact (props) {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        {/*left side*/}
        <div className="flexColStart c-left">
          <span className="orangeText">Наши контакты</span>
          <span className="primaryText">Легко связаться с нами</span>
          <span className="secondaryText">Мы всегда готовы помочь, предоставив вам лучший сервис.
            Мы верим, что хорошее место для жизни может сделать вашу жизнь лучше.
          </span>

          <div className="flexColStart contactModes">
            {/*first row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Позвонить</span>
                    <span className="secondaryText">+7 (928) 290-63-43</span>
                  </div>
                </div>
                <div className="flexCenter button">Позвонить Сейчас</div>
              </div>

              {/*second mode*/}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Написать</span>
                    <span className="secondaryText">+7 (928) 290-63-43</span>
                  </div>
                </div>
                <div className="flexCenter button">Написать Сейчас</div>
              </div>
            </div>
            {/*second row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Видеозвонок</span>
                    <span className="secondaryText">+7 (928) 290-63-43</span>
                  </div>
                </div>
                <div className="flexCenter button">Видеозвонок Сейчас</div>
              </div>

              {/*fourth mode*/}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Сообщение</span>
                    <span className="secondaryText">+7 (928) 290-63-43</span>
                  </div>
                </div>
                <div className="flexCenter button">Сообщение Сейчас</div>
              </div>
            </div>
          </div>
        </div>

        {/*right side*/}
        <div className="c-right">
          <div className="image-container">
            <img src="/contact.jpg" alt="contact"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact