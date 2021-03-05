import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Gallery() {
    const [photoData, setPhoto] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "photo"] | order(order asc){
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
            <ResponsiveMasonry 
                columnsCountBreakPoints={{350: 1, 1000: 2}}
            >
                <Masonry>
                        {photoData && photoData.map((photo,index) => (
                        <div className="mx-auto grid-co p-2">
                            <img 
                                src={photo.image.asset.url}
                                alt="Photo of Nicolas and his Artwork"
                            />
                        </div>
                        ))} 
                </Masonry>
            </ResponsiveMasonry>
        </div>        
    );
}