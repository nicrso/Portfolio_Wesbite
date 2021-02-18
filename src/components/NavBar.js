import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" exact 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-800 text-4xl font-bold Roboto tracking-widest"
                        activeClassName="text-white"
                    >
                        Nicolas Ouporov
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-800"
                        activeClassName="text-white bg-blue-700"
                    > 
                        Blog Post
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-800"
                        activeClassName="text-white bg-blue-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-800"
                        activeClassName="text-white bg-blue-700"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://linkedin.com/in/nicolas-ouporov" 
                        className="mr-4" 
                        target="_blank"
                        fgColor="#fff" 
                        style={{ height: 35, width: 35}}
                    />
                    <SocialIcon 
                        url="https://www.instagram.com/nic.rso/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35}}
                    />
                </div>
            </div>
        </header>
    );

}