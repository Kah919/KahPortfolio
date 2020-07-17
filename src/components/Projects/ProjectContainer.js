import React, { useState, useEffect } from 'react';

export default (props) => {
    const [mode, setMode] = useState();
    useEffect(() => {
        console.log("LOADING", props.location.state.dark)
        // setMode(props.location.state.dark)
    }, [props.location.state.dark])

    return(
        <>
            {console.log(props.location.state.dark)}
            <h1> Project Page </h1>
        </>
    )
}