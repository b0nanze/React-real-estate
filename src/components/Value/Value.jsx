import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton
} from 'react-accessible-accordion'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from "../../utils/accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import "./Value.css"

function Value () {
  return (
    <section className="v-wrapper">
      <div className="innerWidth paddings flexCenter v-container">
        {/*left side*/}
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="value" />
          </div>
        </div>
        
        {/*right side*/}
        <div className="v-right flexColStart">
          <span className="orangeText">Наша Ценность</span>
          <span className="primaryText">Значение, Которое Мы Придаем Вам</span>
          <span className="secondaryText">
            Мы всегда готовы помочь, предоставив вам лучший сервис.
          <br />
            Мы верим, что хорошее место для жизни может сделать вашу жизнь лучше.
          </span>

          <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null)
                return(
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">

                        <AccordionItemState>
                          {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                        </AccordionItemState>

                        <div className="flexCenter icon">
                          {item.icon}
                        </div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">
                        {item.detail}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value