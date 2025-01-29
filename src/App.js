// import logo from './logo.svg';
import './App.css';
import './index.css';
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import bentil from './bentil.jpg'
import CustomSlider from './ImageSlider';

//icons 
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu visibility

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.title = "Paapa Kwesi Bentil";
  }, []);

  return (
    <div>

      <div className="flex justify-between items-center mt-2 border w-full rounded-2xl bg-gray-300 h-16 text-center px-4 sm:px-6 relative">


        <img
          src={bentil}
          alt="Bentil"
          className="h-16 w-16 object-cover rounded-full shadow-lg"
        />

        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-700 text-2xl absolute right-4"
        >
          &#9776;
        </button>


        <div className="hidden sm:flex flex-grow justify-center space-x-5 text-xl mt-1">
          <button>Home</button>
          <button onClick={() => scrollToSection(aboutRef)}>About Me</button>
          <button onClick={() => scrollToSection(portfolioRef)}>Portfolio</button>
          <button onClick={() => alert('coming soon')}>Blog</button>
        </div>

        {/* Hire Me Button - Visible only on larger screens and positioned on the far right */}
        <button className="hidden sm:block text-white bg-black p-1 w-32 h-10 mt-3 rounded-2xl hover:text-black hover:bg-white absolute right-4">
          <a href="mailto:paapabentil122@gmail.com" target="_blank" rel="noopener noreferrer">
            Hire Me
          </a>
        </button>

        {/* Sliding Menu for Mobile */}
        <div
          className={`sm:hidden fixed top-0 right-0 bg-gray-300 w-64 h-full transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl text-gray-700">
              &times; {/* Close Button */}
            </button>
          </div>
          <div className="flex flex-col space-y-6 mt-10 text-xl text-center">
            <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700">About Me</button>
            <button onClick={() => scrollToSection(portfolioRef)} className="text-gray-700">Portfolio</button>
            <button onClick={() => alert('coming soon')} className="text-gray-700">Blog</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen space-y-8 md:space-y-0 md:space-x-24 mt-10 mb-10 md:mt-0 md:mb-0">

        <img
          src={bentil}
          alt="Bentil"
          className="w-80 h-96 object-cover rounded-lg shadow-lg"
        />


        <div className="w-auto h-auto text-center md:text-left">
          <h1 className="text-4xl ">Paapa Kwesi Bentil</h1>
          <h1 className="text-gray-500">FULLSTACK ENGINEER</h1>
          <br />


          <ul className="grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1">
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <FaHtml5 className="mt-1 mr-1" color="orange" /> HTML
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <SiCss3 className="mt-1 mr-1" color="blue" /> CSS
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <SiTailwindcss className="mt-1 mr-1" color="blue" /> TAILWINDCSS
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <SiJavascript className="mt-1 mr-1" color="orange" /> JAVASCRIPT
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <FaReact className="mt-1 mr-1" color="blue" /> REACT
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <FaJava className="mt-1 mr-1" color="red" /> JAVA
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <FaPhp className="mt-1 mr-1" color="red" /> PHP
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <GrMysql className="mt-1 mr-1" color="blue" /> MYSQL
            </li>
          </ul>
        </div>
      </div>

      <div ref={aboutRef} className='text-center bg-gray-300 p-10'>
        <h1 className='text-xl'>PROFESSIONAL SUMMARY</h1><br />
        <p className='text-center'>I am a passionate and detail-oriented Fullstack Engineer with experience in designing, developing, and maintaining dynamic web applications. Proficient in both frontend and backend technologies, including React, JavaScript, TailwindCSS, Java, and PHP, I have a strong foundation in building responsive, user-friendly interfaces and creating efficient, scalable server-side solutions. My expertise lies in creating seamless user experiences, optimizing performance, and working collaboratively with cross-functional teams to deliver high-quality products.

          With a keen eye for design and a focus on clean, maintainable code, I strive to continually enhance my skills and stay up-to-date with the latest industry trends. I am committed to delivering solutions that not only meet technical requirements but also exceed user expectations.

        </p><br /><br />
        <div className="flex flex-col sm:flex-row sm:justify-around items-center sm:items-start gap-6 p-4">
          <div className="text-center sm:text-left">
            <h2 className="text-lg mb-2">Let's get in touch</h2>
            <p className="flex items-center justify-center sm:justify-start text-sm">
              <IoCall className="mr-2" color="black" /> +233509840139
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg  mb-2">Drop an email</h2>
            <p className="flex items-center justify-center sm:justify-start text-sm">
              <MdEmail className="mr-2" color="black" size={22} />
              <a
                href="mailto:paapabentil122@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800"
              >
                paapabentil122@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg  mb-2">Follow me</h2>
            <p className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://github.com/PBentil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaGithub color="black" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/paapa-bentil-89b613268"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaLinkedin color="black" size={24} />
              </a>
            </p>
          </div>
        </div>
        <br /><br />
      </div>
      <div className='text-center bg-black text-white p-4'>
        <h1 className='text-2xl'>Certified Full-Stack Developer</h1>
      </div>
      <div ref={portfolioRef} className='mt-10 p-8'><br />
        <h1 className='text-center text-xl text-gray-400'>Portfolio</h1>
        <h1 className='text-center text-2xl'>Recent Works</h1><br />
        <CustomSlider />
      </div><br /><br />
      <div className='bg-gray-300 p-6 mt-4 text-center'>
        <p className='flex justify-center '>
          <a href='https://github.com/PBentil' rel='noopener noreferrer' className='flex items-center mt-1 mr-1'>
            <FaGithub color='black' size={24} />
          </a>
          <a href="https://www.linkedin.com/in/paapa-bentil-89b613268" rel="noopener noreferrer" className="flex items-center mt-1 mr-1">
            <FaLinkedin color="black" size={24} />
          </a>
          <a href="mailto:paapabentil122@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center mt-1 mr-1">
            <MdEmail size={28} />
          </a>
        </p>
        <a href="mailto:paapabentil122@gmail.com" target="_blank" rel="noopener noreferrer" className='text-xl'>
          hire@paapabentil122@gmail.com
        </a>
        <div>
          <p className='flex justify-center'><FaRegCopyright className='mt-1.5 mr-1' /> 2025</p>
        </div>
        <h1>Paapa Kwesi Bentil</h1>
      </div>

    </div>
  );
}

export default App;
