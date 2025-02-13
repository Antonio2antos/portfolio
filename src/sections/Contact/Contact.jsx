import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hpu4as",
        "template_1whdvs3", 
        e.target,
        "tPpDZclLef0zzOsBb" 
      )
      .then(() => {
        setStatus("Email sent with success! ✅");
        e.target.reset();
      })
      .catch(() => {
        setStatus("Error sending email. ❌");
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}

export default Contact;
