'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section in view
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[rgba(51,51,51,0.5)] transition duration-300 backdrop-blur-sm">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <h1 className="text-[22px] font-bold bg-gradient-to-b from-blue-600 to-indigo-700 text-transparent bg-clip-text drop-shadow">
            Rytshark Port
          </h1>
          <ul className="flex gap-6">
            {["Home", "About", "Projects", "Contact"].map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    className={`text-lg transition ${isActive ? 'text-red-500 font-semibold' : 'text-white hover:text-red-600'
                      }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>


      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center bg-fixed flex justify-center items-center text-white bg-[url('/hero-bg.jpg')]"
      >
        <div className="bg-black/80 bg-opacity-70 p-12 rounded-lg text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Hey, <strong>Abhishal KS</strong> here!
          </h1>
          <p className="mb-2">Co-Founder of TipDoor.</p>
          <p className="mb-4">
            Working with Tech Startups as a passionate web developer.
          </p>
          <a
            href="#about"
            className="inline-block mt-4 px-6 py-2 bg-red-600 hover:bg-red-800 text-white rounded transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center text-white bg-[url('/hero-bg2.jpg')]"
      >
        <div className="flex flex-col items-center text-center max-w-5xl px-4">
          <h2 className="bg-black/80 bg-opacity-70 p-8 rounded-lg mb-8 text-3xl font-bold w-full">
            About Me
          </h2>
          <p className="mb-8 max-w-2xl leading-relaxed">
            Hi, I&apos;m <strong>Abhishal Kumar Sharma</strong>, a full-stack web developer based in Delhi,
            with a focus on front-end development. I specialize in building dynamic and user-friendly web
            applications using modern technologies.
          </p>
          <h3 className="text-2xl font-semibold mb-6 underline decoration-white/40">
            My Skill Cards
          </h3>
          <div className="flex flex-wrap gap-5 md:gap-9 w-full justify-center">
            {[
              { src: 'HTML5.webp', name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
              { src: 'CSS3.png', name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
              { src: 'JavaScript.png', name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
              { src: 'ExpressJS.png', name: 'Express', url: 'https://expressjs.com/' },
              { src: 'MongoDB.png', name: 'MongoDB', url: 'https://www.mongodb.com/' },
              { src: 'Tailwind CSS.png', name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
              { src: 'React.webp', name: 'React', url: 'https://reactjs.org/' },
              { src: 'nextjs.png', name: 'Next', url: 'https://nextjs.org/' },
              { src: 'python.png', name: 'Python', url: 'https://www.python.org/' },
            ].map(({ src, name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black p-5 rounded-lg shadow-md flex flex-col items-center justify-center h-32 w-28 transition-transform hover:scale-105"
              >
                <Image
                  src={`/${src}`}
                  alt={name}
                  height={56}
                  width={56}
                  className="w-14 h-14 object-contain"
                />
                <h3 className="mt-3 font-semibold text-center">{name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen bg-cover bg-center bg-fixed flex justify-center items-center text-white bg-[url('/hero-bg3.jpg')]"
      >
        <div className="text-center max-w-5xl px-4">
          <h2 className="bg-black/80 bg-opacity-70 p-8 rounded-lg text-3xl font-bold mb-8">
            My Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                src: 'project1.jpg',
                title: 'Project 1',
                desc: 'Aesthetics display website',
                linkTo: 'https://aesthetics-meadows.vercel.app/'
              },
              {
                src: 'project2.jpg',
                title: 'Project 2',
                desc: 'Another project description.',
                linkTo: ''
              },
              {
                src: 'project3.jpg',
                title: 'Project 3',
                desc: 'Short description of my third project.',
                linkTo: ''
              },
            ].map(({ src, title, desc, linkTo }) => (
              <div
                key={title}
                className="bg-gray-100 text-black p-6 rounded-lg w-[300px] text-left shadow-md"
              >
                <Image
                  src={`/${src}`}
                  alt={title}
                  fill
                  className="w-full rounded-lg mb-3"
                />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{desc}</p>
                <a
                  target="_blank"
                  href={linkTo}
                  className="text-red-600 mt-2 inline-block hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-[url('/hero-bg4.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center px-4 py-16"
      >
        <div className="w-full max-w-6xl bg-black/70 backdrop-blur-md rounded-xl p-10 shadow-lg text-white">
          <h2 className="text-4xl font-bold text-center mb-10">Let&apos;s Connect</h2>
          <p className="text-lg mb-8 text-center">
            Have a project in mind, or just want to say hello? Reach out via your favorite platform!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Email',
                value: 'abhishalsharma2002@gmail.com',
                href: 'mailto:abhishalsharma2002@gmail.com',
                icon: '📧',
              },
              {
                label: 'LinkedIn',
                value: 'Abhishal Sharma',
                href: 'https://www.linkedin.com/in/abhishal-sharma-22b606209',
                icon: '🔗',
              },
              {
                label: 'GitHub',
                value: 'abhishal-ks',
                href: 'https://github.com/abhishal-ks',
                icon: '💻',
              },
              {
                label: 'Phone',
                value: '+7001478499',
                href: 'tel:+7001478499',
                icon: '📞',
              },
              {
                label: 'Location',
                value: 'Delhi, INDIA',
                href: '#',
                icon: '📍',
              },
              {
                label: 'CV',
                value: 'View CV',
                href: '/Abhishal-CV.pdf',
                icon: '📄',
              },
            ].map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-5 rounded-lg transition"
              >
                <span className="text-3xl">{icon}</span>
                <div>
                  <p className="text-sm text-gray-300">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <section
        id="contact"
        className="min-h-[60vh] bg-[url('/hero-bg4.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center px-4 py-20"
      >
        <div className="bg-black/80 backdrop-blur-md text-center p-10 rounded-xl shadow-lg text-white max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
          <p className="text-lg mb-8">
            Have a project in mind, or just want to say hello? Reach out via your favorite platform!
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:you@example.com"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-medium transition"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-full font-medium transition"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center pb-6 ">
        <a
          href="#home"
          className="block mb-6 hover:bg-gray-700 py-2 transition"
        >
          Back to top
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhishal-sharma-22b606209/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-800 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24h4V7h-4v17zM8.5 7h3.6v2.17h.05c.5-.95 1.7-2.17 3.5-2.17 3.7 0 4.4 2.43 4.4 5.6V24h-4v-8.5c0-2.03-.03-4.65-2.84-4.65-2.84 0-3.28 2.22-3.28 4.5V24h-4V7z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/AbhishalSharma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.94 4.94 0 002.17-2.72c-.95.56-2.01.96-3.13 1.18a4.92 4.92 0 00-8.39 4.48A13.96 13.96 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.91 4.91 0 01-2.23-.61v.06a4.93 4.93 0 003.95 4.83 4.93 4.93 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.43-.01-.64A10.04 10.04 0 0024 4.56z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/abhishal_ks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.987.24 2.45.404a4.92 4.92 0 011.777 1.077 4.92 4.92 0 011.077 1.777c.164.463.348 1.28.404 2.45.058 1.267.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.987-.404 2.45a4.92 4.92 0 01-1.077 1.777 4.92 4.92 0 01-1.777 1.077c-.463.164-1.28.348-2.45.404-1.267.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.987-.24-2.45-.404a4.92 4.92 0 01-1.777-1.077 4.92 4.92 0 01-1.077-1.777c-.164-.463-.348-1.28-.404-2.45C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.987.404-2.45a4.92 4.92 0 011.077-1.777 4.92 4.92 0 011.777-1.077c.463-.164 1.28-.348 2.45-.404C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.013 7.053.07 5.756.127 4.678.32 3.823.645a7.18 7.18 0 00-2.596 1.682A7.18 7.18 0 00.645 4.823C.32 5.678.127 6.756.07 8.053.013 9.332 0 9.735 0 12c0 2.265.013 2.668.07 3.947.057 1.297.25 2.375.575 3.23a7.18 7.18 0 001.682 2.596 7.18 7.18 0 002.596 1.682c.855.325 1.933.518 3.23.575C9.332 23.987 9.735 24 12 24c2.265 0 2.668-.013 3.947-.07 1.297-.057 2.375-.25 3.23-.575a7.18 7.18 0 002.596-1.682 7.18 7.18 0 001.682-2.596c.325-.855.518-1.933.575-3.23.057-1.279.07-1.682.07-3.947 0-2.265-.013-2.668-.07-3.947-.057-1.297-.25-2.375-.575-3.23a7.18 7.18 0 00-1.682-2.596A7.18 7.18 0 0019.177.645c-.855-.325-1.933-.518-3.23-.575C14.668.013 14.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>

        <div className="h-px bg-gray-500 w-[90vw] mx-auto mb-4"></div>

        <p className="text-sm">
          &copy; 2025 Abhishal Kumar Sharma. All rights reserved.
        </p>
      </footer>

    </>
  );
}
