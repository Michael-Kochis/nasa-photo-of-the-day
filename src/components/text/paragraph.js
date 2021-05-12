import React from 'react'

function Paragraph(props) {
   return (
        <p className="left">
            {props !== undefined && props.text}
        </p>
    )
}

export { 
    Paragraph
}
