import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { NasaPhoto } from '../components/image/nasaphoto'
import { NasaVideo } from '../components/video/nasavideo'
import { PhotoTitle } from '../components/text/photoTitle';

function NasaAPI() {
    let [nasaData, setNasaData] = useState();
    const nasaRef = useRef();

    const NasaDiv = styled.div`
        background-color: #6F6F6F;
        border-radius: 1rem;
    `

    useEffect(() => {
        setNasaData(axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then((response) => {
                setNasaData(response.data);
                console.log(response.data)
            }).catch((error) => alert(error) )
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nasaRef]);

    return (
        <NasaDiv className="nasa">
            {nasaData && <PhotoTitle title={`Nasa's Photo of the Day: ${nasaData.date}`}></PhotoTitle>}
            {nasaData && nasaData.media_type === "image" && <NasaPhoto props={nasaData}></NasaPhoto>}
            {nasaData && nasaData.media_type === "video" && <NasaVideo props={nasaData}></NasaVideo>}

            {!nasaData && <p>Houston, we have a problem (No data from API).</p>}
        </NasaDiv>
    )
}

export {
    NasaAPI
}
