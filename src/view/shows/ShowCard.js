import React from "react";
// import { ShowList } from "./ShowList";

const ShowCard = (props) => {
    const { show } = props;
    const {name, image} = show;
    console.log("SHOW CARD:", show);

    return (

    <div className="col m4">
      <div className="card">
        <div className="card-image">
          <img src={image.medium} />
        
        </div>
        <div className="card-content">
          <p>{name}</p>
        </div>
        {/* <div className="card-action">
          <a></a>
        </div> */}
      </div>
    </div>
  
   
    )

}

export { ShowCard }