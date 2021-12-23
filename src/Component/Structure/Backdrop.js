import React from 'react';
import '../../index.css';

function Backdrop(props){
    return ( 
        <div onClick={props.onCancel}
            style={{
                position : "fixed",
                zIndex: "1",
                backgroundColor: "rgba(0, 0, 0, 0.356)",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0"
            }} 
        />
    );
}
export default Backdrop;