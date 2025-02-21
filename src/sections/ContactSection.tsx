// src/sections/ContactSection.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  min-height: 100vh;
  padding: 40px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0f0;
  text-shadow: 0 0 6px #0f0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #0f0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #0f0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  resize: none;
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #111;
  border: 2px solid #0f0;
  color: #0f0;
  font-family: "Orbitron", sans-serif;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 6px #0f0);
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ContactSection: React.FC = () => {
  return (
    <Container
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <Title>Contact</Title>
      <ContactForm
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks for reaching out!");
        }}
      >
        <InputField type="text" placeholder="Name" required />
        <InputField type="email" placeholder="Email" required />
        <TextArea rows={5} placeholder="Message" required />
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
    </Container>
  );
};

export default ContactSection;
