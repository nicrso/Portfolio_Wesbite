import React, {useEffect, useState } from "react";
import headshot from "../frontal.jpg";
import art from "../art.jpg";
import dance from "../dance.jpg";
import bike from "../bike.JPG";

export default function About() {

    return (
        <div className="md:flex content-center justify-between py-20 px-20">
            <div className="md:w-1/2 mb-5 md:mb-0">
                <div className="flex-auto grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <img 
                            src={headshot}
                            alt="Head Shot Photo of Nicolas" 
                        /> 
                    </div>
                    <div>
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
                <h2 className="sm:text-3xl md:text-3xl lg:text-6xl serif italic font-bold text-4xl text-center">Nice to Finally Meet You.</h2>
                <p className="text-base lg:text-4xl serif text-2xl mt-10 md:pl-8 lg:p-8 content-center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <h2 className="pt-5 pl-10 text-3xl italic serif underline"> </h2>
                {/* <iframe className="pl-10"frameBorder="0" scrolling="no" width="100%" height="100%" src="https://drive.google.com/file/d/1ZJfKf1041FWI3sklT2VwlD7fDb9gxjKa/preview"> 
                    This browser does not support PDFs. Please download the PDF to view it: Download PDF 
                </iframe> */}

                
                <h2 className="pt-14 text-3xl serif">Have an interesting Idea: <a className="text-3xl italic serif underline" href="mailto:n.ouporov@gmail.com">Email Me</a></h2>
            </div>
        </div>
    );
}