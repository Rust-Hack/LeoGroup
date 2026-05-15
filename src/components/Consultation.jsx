import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./Consultation.module.css";
import rain from "../assets/rain.svg";
import rainForMobile from "../assets/rainForMobile.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Consultation() {
  const formRef = useRef();
  const modalRef = useRef();
  const triggerRef = useRef(null);
  const phoneInputRef = useRef(null);
  const wasOpenRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [digits, setDigits] = useState("");
  const [status, setStatus] = useState("idle");
  const isMobile = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      phoneInputRef.current?.focus();
    } else if (wasOpenRef.current) {
      triggerRef.current?.focus();
      setStatus("idle");
      setDigits("");
      setIsFocused(false);
    }
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_eicyg95",
        "template_ytn49wg",
        formRef.current,
        "Gxn4cO1plMToZHK7V"
      )
      .then(() => setStatus("success"))
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  const formatPhone = (d) => {
    let result = "+375";
    if (d.length > 0) result += "(" + d.substring(0, 2);
    if (d.length >= 2) result += ")";
    if (d.length > 2) result += d.substring(2, 5);
    if (d.length >= 5) result += "-" + d.substring(5, 7);
    if (d.length >= 7) result += "-" + d.substring(7, 9);
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

  const handlePhoneKeyDown = (e) => {
    if (e.key !== "Backspace" && e.key !== "Delete") return;
    const input = e.target;
    if (input.selectionStart !== input.selectionEnd) return;
    const pos = input.selectionStart;

    if (e.key === "Backspace") {
      if (pos === 0) return;
      if (pos <= 5) {
        e.preventDefault();
        setDigits((prev) => prev.slice(0, -1));
        return;
      }
      const charBefore = input.value[pos - 1];
      if (!/\d/.test(charBefore)) {
        e.preventDefault();
        setDigits((prev) => prev.slice(0, -1));
      }
    } else if (e.key === "Delete") {
      if (pos < 5) {
        e.preventDefault();
      }
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          ref={triggerRef}
          className={styles.floatingButton}
          onClick={() => setIsOpen(true)}
          aria-label="Открыть форму консультации"
        >
          <img src={rain} alt="" />
        </button>
      )}

      {isOpen && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-title"
        >
          <div className={styles.modal} ref={modalRef}>
            {status === "success" ? (
              <div className={styles.formCard}>
                <div className={styles.arrowRain}>
                  <img src={isMobile ? rainForMobile : rain} alt="" />
                </div>
                <div id="consultation-title" className={styles.title}>
                  Заявка отправлена!
                </div>
                <p className={styles.successText}>
                  Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setIsOpen(false)}
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className={styles.formCard}
              >
                <div className={styles.arrowRain}>
                  <img src={isMobile ? rainForMobile : rain} alt="" />
                </div>

                <div id="consultation-title" className={styles.title}>
                  Нужна консультация?
                </div>

                <input
                  ref={phoneInputRef}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  aria-label="Номер телефона"
                  className={styles.input}
                  value={
                    digits.length === 0 && !isFocused
                      ? ""
                      : formatPhone(digits)
                  }
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
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
                  autoComplete="name"
                  aria-label="ФИО"
                  placeholder="ФИО"
                  className={styles.input}
                />
                <input
                  name="product"
                  aria-label="Товар"
                  placeholder="Товар"
                  className={styles.input}
                />

                {status === "error" && (
                  <div className={styles.error} role="alert">
                    Не удалось отправить. Попробуйте ещё раз.
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.button}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Отправка..." : "Отправить"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Consultation;
