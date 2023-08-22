import React from "react";
function card(props){
    return(
        <div className="term">
            <h1>{props.name}</h1>
            <h2>Annual salary:{props.sal}</h2>
            <a href={props.link}>Apply here!</a>
        </div>
    );
}
export default card;