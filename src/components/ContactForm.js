import "./ContactForm.css";
import axios from "axios";
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {API} from '../global.js'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.subject.trim() === '' ||
      formData.message.trim() === ''
    ) {
      toast.error('Please fill in all the form fields');
      return;
    }

    try {
      await axios.post(`${API}/send-email`, formData)
            .then(res => {
              console.log(`${res.data.message}`)
              toast.success(res.data.message)
            })
            .catch(err => {
              toast.error(`Error sending email ${err}`)
            })
      console.log('Email sent successfully');
      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.log('Error sending email', error);
    }
  };

  return (
    <div className="form">
    <ToastContainer />
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input 
            type="text"
            name="name"
           value={formData.name}
           onChange={handleChange}
            />
            <label>Email</label>
            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            <label>Subject</label>
            <input
             type="text"
             name="subject"
             value={formData.subject}
             onChange={handleChange}
             />
            <label>Message</label>
            <textarea
             rows="6"
              placeholder="Type your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}
