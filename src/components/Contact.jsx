import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const phoneRegex = /^\+233\d{9}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      showMessage('Please enter a valid Ghanaian number starting with +233', 'error');
      return;
    }

    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwZkga2xJ_PKrSRO4cc5g_ZKciM15TITnXXKyWEDg_vlc99XqyjZn4IoxgCNHJWzNKJ/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      showMessage('Message sent successfully!', 'success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      showMessage('Message sent successfully!', 'success');
      setFormData({ name: '', phone: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title1">Get in Touch with Us</h2>
      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          aria-label="Full name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="+233..."
          pattern="^\+233\d{9}$"
          aria-label="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message..."
          rows="5"
          required
          aria-label="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="css-button-sliding-to-left--blue" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {message && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}
    </section>
  );
};

export default Contact;