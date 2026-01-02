"use client";

import { useState, useEffect } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    school: "",
    level: "",
    role: "student",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Next Gen Registration");
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Username: ${formData.username}
Role: ${formData.role}
School: ${formData.school}
Level: ${formData.level}`
    );

    window.location.href = `mailto:nextgenelevationcircle@gmail.com?subject=${subject}&body=${body}`;

    // Show celebration screen
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">
      {!submitted ? (
        <>
          {/* Soft Blurred Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-gray-800 opacity-80"></div>
          <div className="absolute inset-0 backdrop-blur-md"></div>

          {/* Signup Form */}
          <div className="relative z-10 w-full max-w-md p-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20">
            <h1 className="text-3xl font-extrabold mb-6 text-center">Sign Up for Next Gen</h1>
            <p className="text-gray-300 text-sm text-center mb-6">
              Join the future of campus development. Your data will be sent for registration notice until our backend is live.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <input
                type="text"
                name="level"
                placeholder="100 lvl"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <input
                type="text"
                name="school"
                placeholder="Federal University of Technology Minna"
                value={formData.school}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
              </select>

              <button
                type="submit"
                className="w-full bg-white/90 text-black font-bold py-3 rounded-xl hover:bg-white transition"
              >
                Register
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4 text-center">
              Already registered? <a href="/login" className="text-white font-semibold underline">Login</a>
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Celebration Screen */}
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-20">
            
            {/* Confetti (simple balloons) */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-4 h-8 bg-pink-500 rounded-full animate-bounce`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    top: `${-10 - Math.random() * 20}%`,
                  }}
                />
              ))}
            </div>

            {/* Animated Checkmark */}
            <div className="mb-6">
              <svg
                className="w-24 h-24 text-green-400 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-center">Thank you for being part of our journey!</h2>
            <p className="text-gray-400 mb-6 text-center">we will keep you updated on our every day updates here at next gen.</p>

            <button
              onClick={() => setSubmitted(false)}
              className="bg-white text-black font-bold py-2 px-6 rounded-xl hover:bg-gray-200 transition"
            >
              Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
}
