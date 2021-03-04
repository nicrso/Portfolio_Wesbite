import React, {useEffect, useState } from "react";
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
            <div className="altgrid pt-20">
                {photoData && photoData.map((photo,index) => (
                <div className="grid-item p-2">
                    <img 
                        src={photo.image.asset.url}
                        alt="Photo of Nicolas and his Artwork"
                    />
                </div>
                ))} 
            </div>
            <script src="App.js"></script>
        </div>        
    );
}