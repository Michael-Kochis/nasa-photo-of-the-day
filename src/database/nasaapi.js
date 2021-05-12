import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { NasaPhoto } from '../components/image/nasaphoto'
import { NasaVideo } from '../components/video/nasavideo'

function NasaAPI() {
    let [nasaData, setNasaData] = useState();
    const nasaRef = useRef();

    useEffect(() => {
        setNasaData(axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-12-14')
            .then((response) => {
                setNasaData(response.data);
                console.log(response.data)
            }).catch((error) => alert(error) )
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nasaRef]);

    return (
        <div className="nasa">
            {nasaData && nasaData.media_type === "image" && <NasaPhoto props={nasaData}></NasaPhoto>}
            {nasaData && nasaData.media_type === "video" && <NasaVideo props={nasaData}></NasaVideo>}

            {!nasaData && <p>Houston, we have a problem (No data from API).</p>}
        </div>
    )
}

export {
    NasaAPI
}
