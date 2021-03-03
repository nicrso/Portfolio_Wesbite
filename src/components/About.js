import React, {useEffect, useState } from "react";
import headshot from "../frontal.jpg";
import art from "../art.jpg";
import dance from "../dance.jpg";
import bike from "../bike.JPG";
import { NavLink } from "react-router-dom";

export default function About() {

    return (
        <div>
            <div className="md:flex content-center justify-between py-20 px-5">
                <div className="md:w-1/2 mb-5 md:mb-0">
                    <div className="flex-auto grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <img 
                                src={headshot}
                                alt="Head Shot Photo of Nicolas" 
                            /> 
                        </div>
                        <div >
                            <img 
                                src={bike}
                                alt="Dance Photo of Nicolas" 
                            />    
                        </div>
                        <div>
                            <img 
                                src={dance}
                                alt="Dance Photo of Nicolas" 
                            />
                        </div>
                        <div>
                            <img 
                                src={art}
                                alt="Photo of Nicolas and his Artwork" 
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">

                    </div>
                </div>
                <div className="self-start md:w-1/2 m-8 lg:mt-30">
                    <header className="flex full">
                    </header>
                    <div className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl serif italic font-bold text-center">Nice to Finally Meet You.</div>
                    <div className="text-xl sm:text-xl md:text-2xl lg:text-4xl serif mt-10 md:pl-8 lg:p-8 content-center">
                    Theres a few things you should know about me. I am a rising sophmore at Columbia University interested in mathematics, emerging tech, entrepreneurship, and the arts. I love to learn new skills and am always taking on new small <NavLink 
                                to="/project" 
                                className="hover:text-blue-600 underline"
                            >
                                projects
                            </NavLink>. I have a long history in the performing arts and visual arts, working under institutions such as the <em> Boston Ballet</em> and <em>Young Arts Foundation.</em> I believe that aspects of the arts are present in all fields and I hope to discover these intersections, pushing towards a more authentic, assessible world.   
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-center w-1/2 text-3xl mx-auto serif underline">
                    <em>Resume</em>
                </h2>
                <iframe className="p-10" width="100%" height="700" src="https://drive.google.com/file/d/1ZJfKf1041FWI3sklT2VwlD7fDb9gxjKa/preview"> 
                            This browser does not support PDFs. Please download the PDF to view it: Download PDF 
                </iframe>
            </div>
            <h2 className="text-center w-1/2 mx-auto mb-10 text-3xl serif">Want to Collaborate: <a className="text-3xl italic serif underline" href="mailto:n.ouporov@gmail.com">Email Me</a></h2>
        </div>
    );
}