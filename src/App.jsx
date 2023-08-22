import React from "react";
import Card from "./card";
import details from "./jobs"
function createcard(job){
    return(
        <Card 
        key={job.id}
        name={job.name}
        sal={job.sal}
        link={job.link}
        />

    );
}

function app(){
  return (
    <div>
        <h1>
            <span>Jobs Portal</span>
        </h1>
        <dl className="dictionary">{details.map(createcard)}</dl>
    </div>

  )
}

export default app;