import { useState } from "react";
import Banner from "components/common/banner";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import questionData from "../components/questions/questions.json";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Questions() {
  const [active, setActive] = useState(null);

  function handleClick(e: React.MouseEvent, index: any) {
    e.preventDefault();

    if (active === index) {
      setActive(index);
    } else {
      setActive(index);
    }
  }

  return (
    <>
      <Banner name="Түгээмэл асуулт" />

      <div className="mx-auto max-w-8xl">
        <div className="relative">
          <section className="px-5 py-10 mx-auto lg:px-10 questions">
            <Accordion className="accordion">
              {questionData &&
                questionData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    className={`accordion-item ${
                      active === index ? "bg-[#ffffff14] accordion-item" : ""
                    }`}
                    onClick={(e) => handleClick(e, index)}
                  >
                    <AccordionItemHeading className="accordion-heading ">
                      <AccordionItemButton className="accordion-button">
                        <p className="text-white text-[16px]">{item.name} </p>
                        <div>
                          {active === index ? (
                            <BsFillCaretDownFill />
                          ) : (
                            <BsFillCaretRightFill />
                          )}
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-panel">
                      <p className="text-[#ffffffa3] text-[14px]">
                        {item.desc}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </section>
        </div>
      </div>
    </>
  );
}
