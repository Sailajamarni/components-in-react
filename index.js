import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./Parent";
const BookList=()=>{
    return(
        <div className="BookList">
            <Parent />
        </div>
    )
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
export default BookList;