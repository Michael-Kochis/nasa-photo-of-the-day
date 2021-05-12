import React from 'react'

function PhotoTitle(props) {
    return (
        <h2>
            {props && props.title}
        </h2>
    )
}

export {
    PhotoTitle
}
