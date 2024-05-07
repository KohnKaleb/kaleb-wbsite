import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
      height: 200vh;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6%;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin-bottom: 15px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  form {
    width: 200%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  input {
    width: 100%;
    height: 30px;
    overflow-wrap: break-word;
  }

  #message {
    height: 100px;
  }

  div {
    margin-bottom: 15px;
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
          toast.success('Message sent!', { position: 'top-right' })
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error('Message failed to send!', { position: 'top-right' })
        }
      );

      form.current.reset();
  };

  return (
    <Section id="contact">
      <Navbar />
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
          <Toaster />
        </Bottom>
      </Container>
    </Section>
  );
};

export default Contact;
