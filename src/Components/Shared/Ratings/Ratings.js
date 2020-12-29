import React from 'react';
import ReactStars from "react-rating-stars-component";
import {render} from "react-dom";

const ratingChanged = (newRating) => {
    console.log(newRating);
};
const Ratings = () => {
    return (
        <div>
            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/>
        </div>
    );
};

export default Ratings;