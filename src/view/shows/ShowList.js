import React from "react";
import { ShowCard } from "./ShowCard";


const ShowList = (props) => {
    const { listOfShows } = props;
    // console.log("props:", listOfShows);

    const jsxShowCars = listOfShows.map((showEntity) => {
        return <ShowCard show={showEntity} />
    }) 

    return (
        <div className="row">
            {jsxShowCars}
        </div>
    )

}
export { ShowList }