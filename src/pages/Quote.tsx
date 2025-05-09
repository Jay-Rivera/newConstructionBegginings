import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [filledForm, setFilledForm] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_x2ueklq", // <-- Make sure this matches your EmailJS service ID
        "template_bn2t5im", // <-- Must match your template ID
        form.current,
        "oeRedOt0WnYhgjYDF" // <-- Your public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          form.current?.reset();
          setSuccess(true);
          setFilledForm(true);
        },
        (error) => {
          console.error("Email error:", error.text);
          setSuccess(false);
          setFilledForm(true);
        }
      );
  };

  return (
    <div id="main__contact--container">
      <div className="contact__container">
        <div className="contact__about contact__half">
          <h3 className="contact__title">
            Thank you for your interest in our business!
          </h3>
          <h4 className="contact__sub-title lightblue">
            Please fill out the form for a quote.
          </h4>
          <p className="contact__para">
            Please explain the specific services that you're interested in in
            the message section to provide a quote.
            <br />
            Once the form is filled out, we'll be able to reach out via either
            phone call, text or email to properly provide a quote.
            <br />
            <br />
          </p>
        </div>

        {!filledForm ? (
          <div className="contact__submit contact__half">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form__item">
                <label className="form__item--label">Name:</label>
                <input
                  type="text"
                  required
                  className="form__item--label"
                  name="user_name"
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Email:</label>
                <input
                  type="email"
                  required
                  className="form__item--label"
                  name="user_email"
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Phone Number:</label>
                <input
                  type="tel"
                  required
                  className="form__item--label"
                  name="user_phone"
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Address:</label>
                <input
                  type="text"
                  required
                  className="form__item--label"
                  name="user_address"
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Message:</label>
                <textarea
                  name="message"
                  required
                  className="form__item--label"
                />
              </div>
              <button type="submit" className="form__submit">
                Send it my way!
              </button>
            </form>
          </div>
        ) : (
          <div className="success__fail--message">
            {success ? (
              <div className="success-message">
                <h3 className="attempt__header">Email Sent!</h3>
                <p className="attempt__para">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="error-message">
                <h3 className="attempt__header">Oops! Something went wrong.</h3>
                <p className="attempt__para">
                  Please{" "}
                  <a
                    className="e-link"
                    href="mailto:newbeginninsconst@gmail.com"
                  >
                    contact me
                  </a>{" "}
                  directly.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
