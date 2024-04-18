import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div``;

const Top = styled.div``;

const Bottom = styled.div``;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_EMAIL_JS_SECRET_KEY);
    emailjs
      .sendForm(process.env.REACT_APP_EMAIL_JS_SECRET_KEY, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Top>
          <div>Contact</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KohnKaleb"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kalebkohn/"
          >
            <FaLinkedin />
          </a>
        </Top>
        <Bottom>
          <div>Reach out to me</div>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="from_name"/>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" name="email"/>
            <label htmlFor="message">Message</label>
            <input id="message" type="text" name="message" />
            <button type="submit">Submit</button>
          </form>
        </Bottom>
      </Container>
    </Section>
  );
};

export default Contact;
