import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./Consultation.module.css";
import rain from "../assets/rain.svg";
import rainForMobile from "../assets/rainForMobile.svg";

function Consultation() {
  const formRef = useRef();
  const modalRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [digits, setDigits] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  // 📌 закрытие по клику вне формы
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eicyg95",
        "template_ytn49wg",
        formRef.current,
        "Gxn4cO1plMToZHK7V"
      )
      .then(() => {
        alert("Заявка отправлена!");
        formRef.current.reset();
        setDigits("");
        setIsFocused(false);
        setIsOpen(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Ошибка отправки");
      });
  };

  // 📌 формат телефона
  const formatPhone = (digits) => {
    let result = "+375";

    if (digits.length > 0) result += "(" + digits.substring(0, 2);
    if (digits.length >= 2) result += ")";
    if (digits.length > 2) result += digits.substring(2, 5);
    if (digits.length >= 5) result += "-" + digits.substring(5, 7);
    if (digits.length >= 7) result += "-" + digits.substring(7, 9);

    return result;
  };

  const handlePhoneChange = (e) => {
    let numbers = e.target.value.replace(/\D/g, "");

    if (numbers.startsWith("375")) {
      numbers = numbers.slice(3);
    }

    numbers = numbers.substring(0, 9);
    setDigits(numbers);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      setDigits((prev) => prev.slice(0, -1));
    }
  };

  return (
    <>
      {/* КАПЛЯ */}
      {!isOpen && (
        <div className={styles.floatingButton} onClick={() => setIsOpen(true)}>
          <img src={rain} alt="open" />
        </div>
      )}

      {/* МОДАЛКА */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal} ref={modalRef}>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className={styles.formCard}
            >
              <div className={styles.arrowRain}>
                <img src={isMobile ? rainForMobile : rain} alt="" />
              </div>

              <div className={styles.title}>Нужна консультация?</div>

              <input
                type="tel"
                name="phone"
                className={styles.input}
                value={
                  digits.length === 0 && !isFocused
                    ? ""
                    : formatPhone(digits)
                }
                onChange={handlePhoneChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(digits.length > 0)}
                placeholder={
                  isFocused || digits.length > 0
                    ? "+375(__)___-__-__"
                    : "Номер телефона"
                }
              />

              <input
                name="name"
                placeholder="ФИО"
                className={styles.input}
              />
              <input
                name="product"
                placeholder="Товар"
                className={styles.input}
              />

              <button type="submit" className={styles.button}>
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Consultation;