import React, {useEffect, useState } from "react";
import art from "../art.jpg";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Gallery() {
    const [photoData, setPhoto] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "photo"]{
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
                <div className="altgrid">
                    {photoData && photoData.map((photo,index) => (
                        <div className="grid-item p-2">
                        <img 
                            src={photo.image.asset.url}
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