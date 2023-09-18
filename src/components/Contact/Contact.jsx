import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Контакти</span>
          <span className="primaryText">Звертайтесь до нас</span>
          <span className="secondaryText">
          Ми цінуємо ваші запити, питання та фідбек. Будь-які пропозиції чи зауваження вітаються. Наша команда завжди на зв'язку, готова надати вам необхідну допомогу та консультацію. Ми прагнемо забезпечити зручність і задоволення кожного нашого клієнта. Залишайтеся на зв'язку з нами і отримуйте найкращі послуги.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Телефон</span>
                    <span className="secondaryText">+380 97 049 20 20</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+1234567890" target="_blank">Подзвонити</a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Telegram</span>
                    <span className="secondaryText">+380 97 049 20 20</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="https://t.me/Trypoliev" target="_blank">Написати</a></div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Viber</span>
                    <span className="secondaryText">+380 97 049 20 20</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="https://t.me/Trypoliev" target="_blank">Написати</a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Пошта</span>
                    <span className="secondaryText">example@example.com</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="mailto:example@example.com" target="_blank">Send Email</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./ex8.jpg" alt="contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;