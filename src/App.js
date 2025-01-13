// import logo from './logo.svg';
import './App.css';
import './index.css';
import React, { useEffect } from "react";
import bentil from './bentil.jpeg'

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

function App() {
  useEffect(() => {
    document.title = "Paapa Kwesi Bentil"; // Change the title here
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <div className='flex justify-around mt-2 border w-full rounded-2xl bg-gray-300 h-16 text-center'>
        <img
          src={bentil}
          alt="Bentil"
          className=" h-16 w-16 object-cover  rounded-full shadow-lg"
        />
        <div className='flex space-x-5 mt-3 text-xl'>

          <a href='/'>Home</a>
          <a href='/'>about Me</a>
          <a href='/'>Portfolio</a>
          <a href='/' onClick={() => alert('coming soon')}>Blog</a>
        </div>
        <button className='text-white bg-black p-1 w-32  h-10 mt-3 rounded-2xl hover:text-black hover:bg-white'><a href="mailto:paapabentil122@gmail.com" target="_blank" rel="noopener noreferrer">
  Hire Me
</a></button>
      </div>
      <div className=" flex justify-center items-center h-screen w-screen space-x-24 ">
        <img
          src={bentil}
          alt="Bentil"
          className=" w-80 h-96 object-cover ml-24 rounded-lg shadow-lg"
        />
        <div className="w-auto h-auto ">
          <h1 className="text-4xl">Paapa Kwesi Bentil</h1>
          <h1 className="text-gray-500">FULLSTACK ENGINEER</h1>
          <br />
          <ul className="grid grid-cols-2 gap-4 ">
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
              <FaJava className="mt-1 mr-1" color="red" /> PHP
            </li>
            <li className="flex justify-center bg-gray-300 p-4 rounded w-48">
              <GrMysql className="mt-1 mr-1" color="blue" /> MYSQL
            </li>
          </ul>
        </div>
      </div><br /><br /><br />
      <div className='text-center bg-gray-300 p-10'>
        <h1 className='text-xl'>PROFESSIONAL SUMMARY</h1><br />
        <p className='text-center'>I am a passionate and detail-oriented Fullstack Engineer with experience in designing, developing, and maintaining dynamic web applications. Proficient in both frontend and backend technologies, including React, JavaScript, TailwindCSS, Java, and PHP, I have a strong foundation in building responsive, user-friendly interfaces and creating efficient, scalable server-side solutions. My expertise lies in creating seamless user experiences, optimizing performance, and working collaboratively with cross-functional teams to deliver high-quality products.

          With a keen eye for design and a focus on clean, maintainable code, I strive to continually enhance my skills and stay up-to-date with the latest industry trends. I am committed to delivering solutions that not only meet technical requirements but also exceed user expectations.

        </p><br /><br />
        <div className='flex justify-around'>
          <div>
            <h2>Let's get in touch</h2>
            <p className='flex'><IoCall className='mt-1 mr-1' color='black' />+233509840139</p>
          </div>
          <div>
            <h2>Drop an email</h2>
            <p className='flex'><MdEmail className='mt-1 mr-1' color='black' /><a href="mailto:paapabentil122@gmail.com" target="_blank" rel="noopener noreferrer">
              paapabentil122@gmail.com
            </a></p>
          </div>
          <div>
            <h2>Follow me</h2>
            <p className='flex'>
              <a href='https://github.com/PBentil' rel='noopener noreferrer' className='flex items-center mt-1 mr-1'>
                <FaGithub color='black' size={24} />
              </a>
              <a href="https://www.linkedin.com/in/paapa-bentil-89b613268" rel="noopener noreferrer" className="flex items-center mt-1 mr-1">
                <FaLinkedin color="blue" size={24} />
              </a>
            </p>
          </div>
        </div> <br /><br />
      </div>
      <div className='text-center bg-black text-white p-4'>
        <h1 className='text-2xl'>Certified Full-Stack Developer</h1>
      </div>
      <div className='mt-4'>
        <h1 className='text-center text-xl text-gray-400'>Portfolio</h1>
        <h1 className='text-center text-2xl'>Recent Works</h1>
      </div>

    </div>
  );
}

export default App;
