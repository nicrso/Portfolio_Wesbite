import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="fixed bg-white z-50 w-full p-4">
            <div>
                <nav className="flex justify-between">
                    <div>
                        <NavLink 
                            to="/" exact 
                            className="text-black hover:text-grey-500 text-2xl font-bold Roboto"
                            activeClassName="text-grey-500"
                        >
                            NICOLAS OUPOROV
                        </NavLink>
                    </div>
                    <div className="flex items-center">
                        <NavLink 
                            to="/work"

                            className="Roboto font-bold text-2xl p-2 text-black hover:text-blue-800"
                            activeClassName="text-gray-500"
                        > 
                            Work
                        </NavLink>
                        <NavLink 
                            to="/project" 
                            className="Roboto font-bold text-2xl p-2 text-black hover:text-blue-800"
                            activeClassName="text-gray-500"
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className="Roboto font-bold text-2xl p-2 text-black hover:text-blue-800"
                            activeClassName="text-gray-500"
                        >
                            About
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );

}