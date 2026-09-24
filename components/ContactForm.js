"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 4000);
    return () => clearTimeout(timer);
  }, [sent]);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="mb-2 text-lg font-semibold">Thanks for reaching out!</h3>
        <p className="text-sm text-text-soft">
          We&apos;ve got your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="rounded-full border border-border bg-bg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          className="rounded-full border border-border bg-bg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        value={form.message}
        onChange={handleChange}
        placeholder="How can we help?"
        className="resize-none rounded-3xl border border-border bg-bg px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="w-fit rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-accent-dark"
      >
        Send Message
      </button>
    </form>
  );
}
