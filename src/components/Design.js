import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function DesignGallery() {
    const [photoData, setPhoto] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "design"] | order(order asc) {
                    title,
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
        <div>
            <body className="pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {photoData && photoData.map((design,index) => (
                        <div className="m-10 md:m-30 lg:m-10 shadow-xl">
                        <img 
                            src={design.image.asset.url}
                            alt="Photo of Nicolas and his Artwork" 
                        />
                    </div>
                    ))} 
                </div>
            </body>
            <script src="app.js"></script>
        </div>
    );
}