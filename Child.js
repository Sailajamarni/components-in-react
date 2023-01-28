import React from "react";
const Child=(props)=>{
    return (
        <>
        <h1>This is child</h1>
        <div>
            <h3>{props.title}</h3>
            <h3>{props.name}</h3>
        </div>
        </>
    )
};
export default Child;