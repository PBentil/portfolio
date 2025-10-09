import React, { useEffect, useRef, useState } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava,
    FaPhp,
    FaNodeJs,
    FaGithub,
    FaLinkedin,
    FaAws,
    FaDocker
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiReactos, SiTypescript,SiNestjs
} from "react-icons/si";
import {
    IoCall,
    IoMenu,
    IoClose
} from "react-icons/io5";
import {
    MdEmail
} from "react-icons/md";
import {
    FaRegCopyright
} from "react-icons/fa6";
import bentil from "../src/bentil.jpg";
import CustomSlider from "./ImageSlider";
import { RiNextjsFill } from "react-icons/ri";



const IconMap = {
    html: FaHtml5,
    css: FaCss3Alt,
    tailwind: SiTailwindcss,
    javascript: FaJs,
    react: FaReact,
    java: FaJava,
    php: FaPhp,
    mysql: SiMysql,
    nodejs: FaNodeJs,
    reactnative: SiReactos,
    github: FaGithub,
    postgres: SiPostgresql,
    aws: FaAws,
    docker: FaDocker,
    phone: IoCall,
    email: MdEmail,
    linkedin: FaLinkedin,
    menu: IoMenu,
    close: IoClose,
    copyright: FaRegCopyright,
    typescript: SiTypescript,
    Nestjs: SiNestjs,
    Nextjs: RiNextjsFill()
};

const Icon = ({ name, color = "currentColor", size = 24, className = "" }) => {
    const IconComponent = IconMap[name];
    return IconComponent ? (
        <IconComponent size={size} color={color} className={className} />
    ) : (
        <div style={{ width: size, height: size, backgroundColor: color, borderRadius: '50%' }}></div>
    );
};

function App() {
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth",
        });
        setMenuOpen(false);
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        document.title = "Paapa Kwesi Bentil - Full Stack Developer";

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = [
        { name: "HTML", icon: "html", color: "#E34F26" },
        { name: "CSS", icon: "css", color: "#1572B6" },
        { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
        { name: "React", icon: "react", color: "#61DAFB" },
        { name: "React Native", icon: "reactnative", color: "#61DAFB" },
        { name: "Node.js", icon: "nodejs", color: "#339933" },
        { name: "Java", icon: "java", color: "#ED8B00" },
        { name: "PHP", icon: "php", color: "#777BB4" },
        { name: "MySQL", icon: "mysql", color: "#4479A1" },
        { name: "PostgreSQL", icon: "postgres", color: "#336791" },
        { name: "GitHub", icon: "github", color: "#181717" },
        { name: "AWS", icon: "aws", color: "#232F3E" },
        { name: "Docker", icon: "docker", color: "#2496ED" },
        { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
        {name:"TypeScript", icon: "typescript", color: "#2496ED" },
        { name: "NestJs", icon: "Nestjs", color: "#E0234E" },
        {name: "NextJs", icon: "Nextjs", color: "#1572B6" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            <img
                                src={bentil}
                                alt="Bentil"
                                className="h-12 w-12 object-cover rounded-full ring-2 ring-blue-500 ring-offset-2"
                            />
                            <span className="font-bold text-xl text-gray-900">Bentil</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                                Home
                            </button>
                            <button onClick={() => scrollToSection(aboutRef)}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                                About
                            </button>
                            <button onClick={() => scrollToSection(portfolioRef)}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                                Portfolio
                            </button>
                            <button onClick={() => scrollToSection(contactRef)}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                                Contact
                            </button>
                            <a href="mailto:paapabentil122@gmail.com"
                               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                                Hire Me
                            </a>
                        </div>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <Icon name={menuOpen ? "close" : "menu"} size={24} />
                        </button>
                    </div>
                </div>

                <div className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ${
                    menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}>
                    <div className="px-4 py-6 space-y-4">
                        <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setMenuOpen(false);}}
                                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                            Home
                        </button>
                        <button onClick={() => scrollToSection(aboutRef)}
                                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                            About
                        </button>
                        <button onClick={() => scrollToSection(portfolioRef)}
                                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                            Portfolio
                        </button>
                        <button onClick={() => scrollToSection(contactRef)}
                                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                            Contact
                        </button>
                        <a href="mailto:paapabentil122@gmail.com"
                           className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-full mt-4">
                            Hire Me
                        </a>
                    </div>
                </div>
            </nav>

            <section className="pt-20 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-12">
                        <div>
                            <p className="text-blue-600 font-medium mb-2 tracking-wide uppercase">
                                Welcome to my portfolio
                            </p>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Paapa Kwesi{" "}
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bentil
          </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Full-Stack Engineer & Problem Solver
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-8">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 group"
                                >
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
                                            <Icon name={skill.icon} color={skill.color} size={24} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                {skill.name}
              </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                            <button
                                onClick={() => scrollToSection(portfolioRef)}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                            >
                                View My Work
                            </button>
                            <a
                                href="mailto:paapabentil122@gmail.com"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section ref={aboutRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase">Get to know me</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Summary</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                I am a passionate and detail-oriented Full-Stack Engineer with experience in designing, developing,
                                and maintaining dynamic web applications. Proficient in modern technologies including React, React Native,
                                Node.js, JavaScript, TailwindCSS, Java, PHP, and cloud services like AWS, I have a strong foundation
                                in building responsive, user-friendly interfaces and creating efficient, scalable server-side solutions.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                My expertise spans across web development, mobile app development with React Native, containerization
                                with Docker, and database management with PostgreSQL and MySQL. I excel at creating seamless user
                                experiences, optimizing performance, and working collaboratively with cross-functional teams to deliver
                                high-quality products that exceed user expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={portfolioRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase">My Work</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Projects</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>
                    <CustomSlider />
                </div>
            </section>

            <section ref={contactRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase">Get in Touch</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icon name="phone" color="white" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Me</h3>
                            <p className="text-gray-600">+233509840139</p>
                        </div>

                        <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icon name="email" color="white" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Me</h3>
                            <a href="mailto:paapabentil122@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                                paapabentil122@gmail.com
                            </a>
                        </div>

                        <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icon name="github" color="white" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h3>
                            <div className="flex justify-center space-x-4">
                                <a href="https://github.com/PBentil" target="_blank" rel="noopener noreferrer"
                                   className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
                                    <Icon name="github" size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/paapa-bentil-89b613268" target="_blank" rel="noopener noreferrer"
                                   className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
                                    <Icon name="linkedin" size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's collaborate and bring your ideas to life with clean code and innovative solutions.
                    </p>
                    <a href="mailto:paapabentil122@gmail.com"
                       className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                        Start a Conversation
                    </a>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold mb-2">Paapa Kwesi Bentil</h3>
                            <p className="text-gray-400">Full-Stack Developer | Mobile App Developer | Cloud Solutions</p>
                            <p className="text-gray-500 text-sm">BSc Computer Science Student</p>
                        </div>

                        <div className="flex items-center space-x-6">
                            <a href="https://github.com/PBentil" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Icon name="github" size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/paapa-bentil-89b613268" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Icon name="linkedin" size={24} />
                            </a>
                            <a href="mailto:paapabentil122@gmail.com" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Icon name="email" size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400 flex items-center justify-center">
                            <Icon name="copyright" size={16} />
                            <span className="ml-1">{new Date().getFullYear()} Paapa Kwesi Bentil. All rights reserved.</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;