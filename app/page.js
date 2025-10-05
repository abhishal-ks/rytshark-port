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
          <p className="mb-8 max-w-2xl">
            Hey, I am Abhishal Kumar Sharma, a web developer based in Delhi. Full-Stack developer specializing in front-end development, creating dynamic, user-friendly web apps.
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
                <Image src={`/${src}`} alt={name} height={56} width={56} className="w-14 h-14 object-contain" />
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
        <div className="w-full max-w-4xl bg-black/70 backdrop-blur-md rounded-xl p-10 shadow-lg text-white">
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
      <footer className="bg-gray-900 text-white text-center pb-6">
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
