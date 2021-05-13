import React from 'react'
import styled from 'styled-components'

function PhotoTitle(props) {

    const NasaTitle = styled.h2`
        color: navy;
    `
    return (
        <NasaTitle>
            {props && props.title}
        </NasaTitle>
    )
}

export {
    PhotoTitle
}
