"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-1 mb-4 flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={subscribed ? "Thanks — you're subscribed!" : "Your email address"}
        className="flex-1 rounded-full border border-[#1c3247] bg-[#0d253b] px-4 py-3 text-sm text-white placeholder:text-[#7d8fa0] focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:bg-accent-dark"
      >
        Join
      </button>
    </form>
  );
}
