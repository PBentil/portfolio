import React from "react";
import {FaGithub} from "react-icons/fa";

const CustomSlider = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Web Application",
            description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL featuring user authentication, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React", "Node.js", "PostgreSQL"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 2,
            title: "Customer Service App",
            description: "React web application for customers  with real-time tracking, push notifications, and integrated payment gateway.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React ", "Node.js", "PostgreSQL"],
            liveLink: "https://customer-service-app-frontend.vercel.app",
            githubLink: "https://github.com/amt-mcadams/customer-service-app-frontend"
        },
        {
            id: 3,
            title: "Task Management Dashboard",
            description: "A comprehensive project management tool with team collaboration features, built using React and integrated with cloud services.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React", "AWS", "Docker"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 4,
            title: "Real Estate Platform",
            description: "Modern real estate website with property listings, virtual tours, and advanced search filters. Built with React and PHP backend.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React", "PHP", "MySQL"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 5,
            title: "Healthcare Management System",
            description: "Digital health platform for appointment scheduling, patient records, and telemedicine consultations with secure data handling.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React", "Node.js", "PostgreSQL"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 6,
            title: "Learning Management System",
            description: "Educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            technologies: ["React", "Java", "MySQL"],
            liveLink: "#",
            githubLink: "#"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
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
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium"
                            >
                                View Live
                            </a>
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
    );
};
export default CustomSlider;
