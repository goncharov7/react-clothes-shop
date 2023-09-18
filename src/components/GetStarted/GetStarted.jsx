import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./GetStarted.css";

const GetStarted = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7fokw09",
        "template_kx4p9mi",
        form.current,
        "gPLE5FKos05dF7g61"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Помечаем форму как отправленную
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleFormReset = () => {
    setIsSubmitted(false); // Сбрасываем состояние, чтобы показать форму снова
    form.current.reset(); // Сбрасываем значения полей формы
  };

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Замовити безкоштовну консультацію</span>
          <span className="secondaryText">
            Просто залиште свої контактні дані, і ми зв'яжемося з Вами
            найближчим часом, щоб відповісти на всі Ваші запитання.
          </span>

          <div className="free_container">
            {isSubmitted ? (
              <div className="submitted-message">
                <p className="success-text">Ваша заявка відправлена!</p>
                <button
                  className="submit-another-btn"
                  onClick={handleFormReset}
                >
                  Повернутися до форми
                </button>
              </div>
            ) : (
              <form
                className="free_contact-form"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="free_form-group">
                  <label className="free_label">
                    Ім'я
                    <span className="required-field">*</span>
                  </label>
                  <input
                    className="free_input"
                    type="text"
                    id="free_name"
                    name="user_name"
                    required
                  ></input>
                </div>
                <div className="free_form-group">
                  <label className="free_label">
                    Номер телефону
                    <span className="required-field">*</span>
                  </label>
                  <input
                    className="free_input"
                    type="tel"
                    id="free_phone"
                    name="user_email"
                    required
                    maxLength="13"
                    placeholder="+380"
                    pattern="(\+?\d{1,12})"
                  ></input>
                </div>
                <div className="free_form-group">
                  <label className="free_label">Повідомлення</label>
                  <textarea
                    className="free_textarea"
                    id="free_message"
                    name="message"
                  ></textarea>
                </div>
                <input
                  className="free_button"
                  type="submit"
                  value="Відправити заявку"
                />
              </form>
            )}
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Компонент для всплывающих уведомлений */}
    </div>
  );
};

export default GetStarted;
