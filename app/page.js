import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[rgba(51,51,51,0.5)] transition duration-300 backdrop-blur-sm">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <h1 className="text-[22px] font-bold bg-gradient-to-b from-blue-600 to-indigo-700 text-transparent bg-clip-text drop-shadow">
            Rytshark Port
          </h1>
          <ul className="flex gap-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-lg hover:text-red-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
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
            Building TipDoor's Tech as a passionate web developer.
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
          <p className="mb-8 max-w-2xl">
            Hey, I'm Abhishal Kumar Sharma, a web developer based in Delhi. Full-Stack developer specializing in front-end development, creating dynamic, user-friendly web apps.
            <br />
            The following skill cards denote the technologies I have experience in.
          </p>
          <div className="flex flex-wrap gap-4 w-full justify-center">
            {[
              { src: 'HTML5.webp', name: 'HTML' },
              { src: 'CSS3.png', name: 'CSS' },
              { src: 'JavaScript.png', name: 'JavaScript' },
              { src: 'ExpressJS.png', name: 'Express' },
              { src: 'MongoDB.png', name: 'MongoDB' },
              { src: 'Tailwind CSS.png', name: 'Tailwind CSS' },
              { src: 'React.webp', name: 'React' },
            ].map(({ src, name }) => (
              <div
                key={name}
                className="bg-gray-100 text-black p-5 rounded-lg shadow-md flex flex-col items-center justify-center h-32 w-28"
              >
                <img src={src} alt={name} className="w-14 h-14 object-contain" />
                <h3 className="mt-3 font-semibold">{name}</h3>
              </div>
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
                <img
                  src={`/${src}`}
                  alt={title}
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
        className="h-screen bg-cover bg-center bg-fixed flex justify-center items-center bg-[url('/hero-bg4.jpg')]"
      >
        <div className="text-white text-center w-full px-4">
          <h2 className="bg-black/80 bg-opacity-70 p-8 rounded-lg text-3xl font-bold mb-6 ">
            Contact Me
          </h2>
          <form
            action="#"
            method="POST"
            className="max-w-md mx-auto bg-black/80 bg-opacity-60 p-6 rounded-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded text-white"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-red-600 hover:bg-red-800 text-white rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <a
          href="#home"
          className="block mb-6 hover:bg-gray-700 py-2 transition"
        >
          Back to top
        </a>
        <div className="h-px bg-gray-500 w-[90vw] mx-auto mb-4"></div>
        <p className="text-sm">
          &copy; 2025 Abhishal Kumar Sharma. All rights reserved.
        </p>
      </footer>
    </>
  );
}
