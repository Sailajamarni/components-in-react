import React from "react";
import Child from "./Child";
const parent=()=>{
    const title="React project";
    const name="Demo app";
    return (
        <>
        <h1>This is parent</h1>
        <div>
            <Child title={title} name={name}/>
        </div>
        </>
    )
};
export default parent;
