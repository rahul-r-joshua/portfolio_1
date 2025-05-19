import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');      // new phone state
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);  // new phone error state
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== '';
    const isPhoneValid = phone.trim() !== '';       // validate phone
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setPhoneError(!isPhoneValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      try {
        const API_URL = "https://portfolio-backend-bdq3.onrender.com";
        const response = await fetch(`${API_URL}/send`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, message }),  // send phone in body
        });

        const data = await response.json();

        if (data.success) {
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setPhone('');     // clear phone field
          setMessage('');
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            ref={form}
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required-email"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
              />
              <TextField
                required
                id="outlined-required-phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={phoneError}
                helperText={phoneError ? "Please enter your phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <div className="button-wrapper">
              <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
                Send
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
