import React from 'react'
import styled from 'styled-components'

function Paragraph(props) {

    const RawText = styled.p`
        color: white;
        margin: 1rem;
        text-align: left;
    `
   return (
        <RawText>
            {props !== undefined && props.text}
        </RawText>
    )
}

export { 
    Paragraph
}
