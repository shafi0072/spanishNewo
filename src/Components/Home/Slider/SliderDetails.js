import React from 'react';
import'./Slider.css'
const SliderDetails = (props) => {
    const {id, title, previous, presentPrice, img} = props.data
    return (
        
        <div class="card SilderResponsiver">
        <div className="d-flex justify-content-center aling-item-center">
        <img src={img} class="card-img-top m-5 ProductsImg" alt="..."/>
        </div>
        <div style={{background:'#2c2c2c'}} class="card-body text-center">
          <h2  style={{color:'#fef7a7',fontFamily: "'Prata', serif"}} class="card-title" >{title}</h2>
          <h1  className='PricingResponsive'>
           <span><del class="card-text">S{previous} </del> </span>
            <span className='card-text'>S{presentPrice}</span>
          </h1>
        </div>
        </div>
    );
};

export default SliderDetails;