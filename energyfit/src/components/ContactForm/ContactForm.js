import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    Prenom: "",
    Nom: "",
    Email: "",
    Message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3007/api/contact", formData);
      setFormData({
        Prenom: "",
        Nom: "",
        Email: "",
        Message: "",
      });
      setMessageSent(true);
    } catch (error) {
      console.error("Error:", error);
      // alert("Error submitting contact form");
    }
  };

  return (
    <div className="ContactForm-container">
      <div className="text-form">
        <h2>Follow Us</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Prenom"
            placeholder="Prénom"
            value={formData.Prenom}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            value={formData.Nom}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <textarea
            name="Message"
            placeholder="Message"
            value={formData.Message}
            onChange={handleChange}
            className="form-input"
            required
          />
          <button type="submit" className="submit-button">
            Envoyer
          </button>
          {messageSent ? (
            <p className="messageSent">Message Sent Successfully !</p>
          ) : (
            <p></p>
          )}
        </form>
      </div>
      <div className="d1">
        <hr />
      </div>
    </div>
  );
}

export default ContactForm;
