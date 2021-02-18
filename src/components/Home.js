import React from "react";
import image from "../ImpulsiveGestures.jpg";

export default function Home() {
    return (
        <main>
            <img 
                src={image} 
                alt="Three Part Dance Image" 
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-blue-600 font-bold Roboto leading-none lg:leading-snug home-name">
                    Hi There. I'm Nicolas Ouporov</h1>
            </section>
        </main>
    );
}