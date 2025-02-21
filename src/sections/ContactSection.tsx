import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #0f0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #111;
  border: 1px solid #0f0;
  color: #0f0;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 6px #0f0);
  }
`;

const ContactSection: React.FC = () => {
  return (
    <Container>
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
