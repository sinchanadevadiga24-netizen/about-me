import { useState } from 'react';
import { profile } from '../data.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) err.message = 'Message should be at least 10 characters.';
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    // Opens the visitor's mail app with the message filled in.
    // To send without a mail app, swap this for a Formspree/EmailJS call (see README).
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="container section">
      <h1 className="page-title">Contact</h1>
      <div className="two-col">
        <div>
          <p className="lead-sm">
            Have an internship, project or idea in mind? Send me a message and I will get back to
            you.
          </p>
          <ul className="contact-list">
            <li>
              <span className="muted">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="muted">GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                {profile.github.replace('https://', '')}
              </a>
            </li>
            <li>
              <span className="muted">LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.linkedin.replace('https://www.', '')}
              </a>
            </li>
          </ul>
        </div>

        <form className="card form" onSubmit={onSubmit} noValidate>
          <label>
            Name
            <input name="name" value={form.name} onChange={onChange} autoComplete="name" />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              autoComplete="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={onChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
          {sent && <p className="success">Opening your email app to send this message…</p>}
        </form>
      </div>
    </section>
  );
}