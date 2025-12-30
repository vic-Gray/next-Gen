import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/20 py-12 px-6 text-white">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3">

        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">About Next Gen</h3>
          <p className="text-gray-400 text-sm">
            Next Gen is a campus-focused platform helping students grow through skills, mentorship, events, and certifications.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-3">
            <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white transition">Programs</a></li>
            <li><a href="#" className="hover:text-white transition">Mentorship</a></li>
            <li><a href="#" className="hover:text-white transition">Events</a></li>
            <li><a href="#" className="hover:text-white transition">Certifications</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Partnership */}
        <div>
          <h3 className="font-bold text-lg mb-3">Partnership</h3>
          <p className="text-gray-400 text-sm">
            In partnership with{" "}
            <a 
              href="https://skulafrica.com.ng" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold px-3 py-1 rounded-full bg-white text-black hover:bg-gray-200 transition"
            >
              Skul Africa
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Next Gen Development Initiative. All rights reserved.
      </div>
    </footer>
  );
}
