import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Simple email regex for validation
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validate phone: only digits allowed (you can extend to +, -, space if needed)
  const validatePhone = (phone: string) => {
    return /^[0-9]+$/.test(phone);
  };

  // Handle phone input change - allow only digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^[0-9\b]+$/.test(val)) {
      setPhone(val);
    }
  };
const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const isNameValid = name.trim() !== '';
  const isEmailValid = validateEmail(email.trim());
  const isPhoneValid = validatePhone(phone.trim());
  const isMessageValid = message.trim() !== '';

  setNameError(!isNameValid);
  setEmailError(!isEmailValid);
  setPhoneError(!isPhoneValid);
  setMessageError(!isMessageValid);

  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid && form.current) {
    try {
      // ✅ Only send main email to yourself
      const result = await emailjs.sendForm(
        'service_7ga02nk',      // your service ID
        'template_o0kwl2h',     // your main template ID
        form.current,
        'q-hNFcB2aPU2dhDHx'     // your public key
      );
      console.log('Email successfully sent:', result.text);

      alert('Message sent successfully!');

      // Clear form after successful send
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Email send error:', error);
      alert('Failed to send message. Please try again later.');
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
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                name="name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                label="Email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email' : ''}
              />
              <TextField
                required
                label="Phone Number"
                name="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
                error={phoneError}
                helperText={phoneError ? 'Please enter a valid phone number (digits only)' : ''}
                inputProps={{ maxLength: 15 }}
              />
            </div>

            <TextField
              required
              label="Message"
              name="message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />

            <div className="button-wrapper">
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
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
