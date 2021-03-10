import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import photo from "./img/photog.jpg";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            description,
            image{
                asset->{
                    _id,
                    url
                },
            }
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-white min-h-screen p-6 pt-20">          
            <section className="grid grid-cols-2 gap-4">
                {projectData && projectData.map((project,index) => (
                <div className="bg-white border rounded-lg shadow-xl">
                    <div class="relative overflow-hidden pb-1/2">
                        <img 
                            className="h-full w-full object-cover"
                            src={project.image.asset.url}
                        >
                        </img>
                    </div>
                    <div className="p-6">
                        <h4 className="mt-1 font-semibold text-lg leading tight">
                            {project.title}
                        </h4>
                        <div className="mt-1 text-p">
                            {project.description}
                        </div>
                    </div>
                </div>
                ))}
            </section>
        </main>
    );
}

