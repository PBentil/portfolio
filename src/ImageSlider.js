import React from "react";
import {FaGithub} from "react-icons/fa";
import {message} from "antd";

const CustomSlider = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const projects = [
        {
            id: 1,
            title: "E-Commerce Web Application",
            description: "A full-stack e-commerce platform built with HTML, CSS , JavaScript, PHP, and MySQL featuring user authentication, payment integration(Paystack), and admin dashboard.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/ecommerce"
        },
        {
            id: 2,
            title: "Customer Service App",
            description: "A full-featured customer support platform that enables users to submit inquiries, track ticket status, and chat with support agents in real time. Built with React for an intuitive interface and Node.js for robust backend services.",
            image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React", "Node.js", "PostgreSQL"],
            liveLink: "https://customer-service-app-frontend.vercel.app",
            githubLink: "https://github.com/amt-mcadams/customer-service-app-frontend"
        },
        {
            id: 3,
            title: "Finance Tracker",
            description: "A mobile app that helps users manage their personal finances by tracking income, expenses, and savings goals. Built with React Native for a seamless cross-platform experience and powered by a Node.js backend with PostgreSQL database.",
            image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React Native", "Node.js", "PostgreSQL"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/rn-wallet"
        },
        {
            id: 4,
            title: "Plagiarism Checker",
            description: "An AI-powered plagiarism detection web app that scans documents and highlights duplicated or similar text across multiple sources. Built with Next.js for the frontend and NestJs for backend processing.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["Next.js", "NestJs", "PostgreSQL"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/plagiarism-checker-frontend"
        },
        {
            id: 5,
            title: "Warehouse and Logistics Tracking System",
            description: "An enterprise-level web application designed to manage and track warehouse operations, inventory, and logistics in real time. Built with Next.js for a modern, responsive interface and Spring Boot (Java) for a powerful backend that ensures data accuracy and seamless synchronization across branches.",
            image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=800&q=80",
            technologies: ["Next.js", "Java (Spring Boot)", "PostgreSQL"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/warehouse-frontend"
        },
        {
            id: 6,
            title: "Church System",
            description: "A responsive frontend web application designed for church administration, allowing easy management of members, branches, and events. Developed using React to provide an intuitive and modern user interface for church staff and leadership.",
            image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
            technologies: ["React"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/church-sys"
        },
        {
            id: 7,
            title: "POS System",
            description: "A modern frontend Point of Sale (POS) web application built with React, featuring a clean interface for browsing food items, adding them to cart, and processing payments. Designed for restaurants or cafés to streamline ordering and checkout experiences — frontend only.",
            image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80",
            technologies: ["React"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/POS"
        },
        {
            id: 8,
            title: "TikTok Clone",
            description: "A frontend web clone of TikTok built with React, featuring short-form video playback, interactive likes, and a scroll-based feed experience similar to the original app. Designed to replicate the core TikTok interface and user interactions using modern React techniques.",
            image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
            technologies: ["React"],
            liveLink: "https://tittok-clone-c5a01.web.app",
            githubLink: "https://github.com/tiktok-clone-amalitech/frontend-web"
        },
        {
            id: 9,
            title: "Student Companion App",
            description: "A mobile application built with Kotlin to help students stay organized and productive. Features include timetable management, assignment tracking, deadline reminders, and academic resource access all in one intuitive Android app.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
            technologies: ["Kotlin", "Android"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/Student-Companion-App"
        },
        {
            id: 10,
            title: "Activity Tracker",
            description: "A web application built with Laravel that enables users to log, monitor, and analyze their daily activities and habits. Features include activity categorization, progress visualization, and historical reports to help users stay consistent with their goals.",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
            technologies: ["Laravel", "PHP", "postgreSql"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/activity-tracker"
        },
        {
            id: 11,
            title: "CarePulse – Patient Appointment System",
            description: "A modern healthcare appointment management platform built with Next.js, allowing patients to book, reschedule, and track appointments with ease. Features include doctor availability management, SMS notifications, and an admin dashboard for streamlined clinic operations.",
            image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80",
            technologies: ["Next.js", "TypeScript"],
            liveLink: "#",
            githubLink: "https://github.com/PBentil/CarePluse"
        }
    ];

    const handleViewLive = (link, title) => {
        if (!link || link === "#" || link.trim() === "") {
            messageApi.info(`🚧 ${title} is not yet hosted.`);
        } else {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <>
            {contextHolder}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                <button
                                    onClick={() => handleViewLive(project.liveLink, project.title)}
                                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium"
                                >
                                    View Live
                                </button>
                                <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
                                >
                                <FaGithub size={16} className="inline mr-1" />
                                Code
                            </a>
                        </div>
                    </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default CustomSlider;