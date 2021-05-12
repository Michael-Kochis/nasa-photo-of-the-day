import React from 'react'
import { Paragraph } from '../text/paragraph'
import { PhotoTitle } from '../text/photoTitle'

function NasaVideo(props) {
    const data = props.props;

    return (
        <div>
            <iframe title={data.title} width="320" height="240" controls src={data.url} >
            </iframe>
            <PhotoTitle title={data.title}></PhotoTitle>
            <Paragraph text={data.explanation}></Paragraph>
        </div>
    )
}

export {
    NasaVideo
}
