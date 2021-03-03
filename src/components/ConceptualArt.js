import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function DesignGallery() {
    const [photoData, setPhoto] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "artwork"] | order(order asc) {
                    title,
                    subtitle,
                    image{
                        asset->{
                            _id,
                            url
                        },
                    }
                }`
            )
            .then((data) => setPhoto(data))
            .catch(console.error);
    }, []);

    return (
        <html>
            <div className=" pt-20">
                <div className="grid">
                    {photoData && photoData.map((artwork,index) => (
                        <div className="lg:flex md:flex sm:flex justify-between m-10 md:m-30 lg:m-10">
                            <img 
                                src={artwork.image.asset.url}
                                alt="Photo of Nicolas and his Artwork" 
                                className="lg:w-1/2 md:w-1/2 sm:w-1/2 w-auto"
                            />
                            <div className="self-start lg:w-1/2 md:w-1/2 sm:w-1/2 w-full p-10">
                                <div className="md:text-4xl lg:text-7xl text-2xl cursive">
                                {artwork.title} 
                                </div>
                                <div className="text-base md:text-2xl lg:text-4xl caption">
                                {artwork.subtitle}
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </html>
    );
}