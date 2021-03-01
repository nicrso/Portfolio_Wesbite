import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import headshot from "../frontal.jpg";
import photo from "./photog.jpg";
import dance from "./dance2.jpg";
import program from "./program.png";
import chair from "./chair.JPG";


export default function WorkGrid() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            Link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-white min-h-screen p-20">
            <section className="container mx-auto">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <Link to={"/work/photo"}>
                        <div className="shadow-xl relative text-align:center">
                            <img 
                                className="myDIV"
                                src={photo}
                                alt="Head Shot Photo of Nicolas" 
                            /> 
                            <div className="hide text-center centered text-blue-900 cursive text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Photography</div>
                        </div>
                    </Link>
                        <div className="shadow-xl relative text-align:center"> 
                            <img 
                                className="myDIV"
                                src={chair}
                                alt="Head Shot Photo of Nicolas" 
                            />
                            <div className="hide text-center centered text-blue-900 cursive text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Conceptual Art</div>
                        </div>
                    <div className="shadow-xl relative text-align:center"> 
                        <img 
                            className="myDIV"
                            src={program}
                            alt="Head Shot Photo of Nicolas" 
                        />
                        <div className="hide text-center centered text-blue-900 cursive text-4xl sm:text-6xl md:text-7xl lg:text-8xl">Design</div> 
                    </div>
                    <div className="shadow-xl relative text-align:center"> 
                        <img 
                            className="myDIV"
                            src={dance}
                            alt="Head Shot Photo of Nicolas" 
                        />
                        <div className="hide text-center centered text-blue-900 cursive text-4xl sm:text-6xl md:text-7xl lg:text-8xl">Dance</div>
                    </div>
                </section>
            </section>
        </main>
    )
}