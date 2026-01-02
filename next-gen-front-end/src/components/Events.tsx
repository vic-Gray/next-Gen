"use client";

import { useState } from "react";

export default function Events() {
  const [formData, setFormData] = useState({
    fullName: "",
    level: "",
    department: "",
    school: "",
    expectations: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Next Gen Event Registration");
    const body = encodeURIComponent(
      `Event: Next Gen First Ever Event
Full Name: ${formData.fullName}
Level: ${formData.level}
Department: ${formData.department}
School: ${formData.school}
Expectations: ${formData.expectations}`
    );

    window.location.href = `mailto:nextgenelevationcircle@gmail.com?subject=${subject}&body=${body}`;

    alert("Your registration is ready to send. Please complete in your email client.");
  };

  return (
    <section className="py-20 px-6 bg-black text-white relative">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold mb-4">Upcoming Event</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Join our first ever Next Gen event and be part of an exciting campus experience!
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg p-8 text-left">
          <h3 className="text-2xl font-bold mb-6">Event: Next Gen First Ever Event</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="level"
              placeholder="Level (e.g., 100 lvl)"
              value={formData.level}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="school"
              placeholder="School"
              value={formData.school}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="expectations"
              placeholder="What are your expectations?"
              value={formData.expectations}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              rows={4}
            />

            <button
              type="submit"
              className="w-full bg-white/90 text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition"
            >
              Register for Event
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
