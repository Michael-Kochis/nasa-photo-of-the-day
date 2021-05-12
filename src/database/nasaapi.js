import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { NasaPhoto } from '../components/image/nasaphoto';

function NasaAPI() {
    let [nasaData, setNasaData] = useState();
    const nasaRef = useRef();

    useEffect(() => {
        setNasaData(axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then((response) => {
                setNasaData(response.data);
            }).catch((error) => alert(error) )
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nasaRef]);

    return (
        <div className="nasa">
            {nasaData && <NasaPhoto props={nasaData}></NasaPhoto>}
            {!nasaData && <p>Houston, we have a problem (No data from API).</p>}
        </div>
    )
}

export {
    NasaAPI
}
