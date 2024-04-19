import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 50px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  form {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  input {
    width: 100%;
  }

  #message {
    height: 100px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_EMAIL_JS_SECRET_KEY);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SECRET_KEY,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
        }
      )
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
          <div>Follow me on socials</div>
          <Icons>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/KohnKaleb"
            >
              <FaGithub style={{ fontSize: '4em' }}/>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kalebkohn/"
            >
              <FaLinkedin style={{ fontSize: '4em' }}/>
            </a>
          </Icons>
        </Top>
        <Bottom>
          <div>Reach out to me</div>
          <form ref={form} onSubmit={sendEmail}>
            <input id="name" type="text" name="from_name" placeholder="name" />
            <input id="email" type="text" name="email" placeholder="email" />
            <input
              id="message"
              type="text"
              name="message"
              placeholder="message"
            />
            <button type="submit">Submit</button>
          </form>
        </Bottom>
      </Container>
    </Section>
  );
};

export default Contact;
