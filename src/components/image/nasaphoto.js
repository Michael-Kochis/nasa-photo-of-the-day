/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Paragraph } from '../text/paragraph'
import { PhotoTitle } from '../text/photoTitle';

function NasaPhoto(props) {
    const data = props.props;

    return (
        <div id="NASA-photo">
            <img src={data.url} alt="NASA Image of the Day"></img>
            <PhotoTitle title={data.title}></PhotoTitle>
            <Paragraph text={data.explanation}></Paragraph>
        </div>
    )
}

export {
    NasaPhoto
}
