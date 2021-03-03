import React from "react";
import image from "../campus.jpg";
import {SocialIcon} from "react-social-icons";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="md:flex items-stretch justify-between pt-24">
            <div className="w-3/4 md:w-1/2 lg:w-1/2 mx-auto">
                <img 
                    src={image}
                    alt="Head Shot Photo of Nicolas"
                    className="rounded-full" 
                /> 
                <div className="sm:invisible md:visible lg:invisible invisible flex content-center justify-evenly mt-8">
                        <SocialIcon url="https://www.linkedin.com/in/nicolas-ouporov/" className="m-1" target="_blank" bgColor="#000" style={{ height: 35, width: 35}}/>
                        <SocialIcon url="https://www.instagram.com/nic.rso/" className="m-1" target="_blank" bgColor="#000" style={{ height: 35, width: 35}}/>
                        <SocialIcon url="mailto:n.ouporov@gmail.com" className="m-1" target="_blank" bgColor="#000" style={{ height: 35, width: 35}}/>
                        <SocialIcon url="https://github.com/nicrso" className="m-1" target="_blank" bgColor="#000" style={{ height: 35, width: 35}}/>
                        <SocialIcon url="https://www.behance.net/nouporov29a3" className="m-1" target="_blank" bgColor="#000" style={{ height: 35, width: 35}}/>
                        <SocialIcon url="https://open.spotify.com/user/n.ouporov?si=pDuATutfSf2r5hET41m14w" className="m-1" target="_blank" bgColor="#000" style={{ height: 35, width:35}}/>
                </div>
            </div>
            <div className="w-3/4 md:w-1/2 lg:w-1/2 p-8 mx-auto flex-auto">
                <div className="sm:text-3xl md:text-6xl lg:text-8xl serif italic font-bold text-4xl pb-5">Hello!</div>
                <div className="sm:text-xl md:text-3xl lg:text-5xl serif text-2xl">I'm <em className="text-bold">Nicolas Ouporov:</em>
                    <br /> A multi-disciplinary artist and student living and working in New York. Currently, I study computer science, mathematics, creative robotics, and economics at Columbia University.  
                    <NavLink 
                            to="/about" 
                            className="hover:text-blue-500"
                            activeClassName="text-gray"
                        >
                            <em> Learn More</em>
                    </NavLink>
                </div>
                <div className="sm:visible md:invisible lg:visible visible flex content-center justify-evenly mt-5 lg:mt-20">
                    <SocialIcon url="https://www.linkedin.com/in/nicolas-ouporov/" className="m-1" target="_blank" bgColor="#000" style={{ height: 55, width: 55}}/>
                    <SocialIcon url="https://www.instagram.com/nic.rso/" className="m-1" target="_blank" bgColor="#000" style={{ height: 55, width: 55}}/>
                    <SocialIcon url="mailto:n.ouporov@gmail.com" className="m-1" target="_blank" bgColor="#000" style={{ height: 55, width: 55}}/>
                    <SocialIcon url="https://github.com/nicrso" className="m-1" target="_blank" bgColor="#000" style={{ height: 55, width: 55}}/>
                    <SocialIcon url="https://www.behance.net/nouporov29a3" className="m-1" target="_blank" bgColor="#000" style={{ height: 55, width: 55}}/>
                    <SocialIcon url="https://open.spotify.com/user/n.ouporov?si=pDuATutfSf2r5hET41m14w" className="m-1" target="_blank" bgColor="#000" style={{ height: 55, width: 55}}/>
                </div>
            </div>
        </div>
    );
}