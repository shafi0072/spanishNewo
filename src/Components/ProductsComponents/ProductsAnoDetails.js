import React from 'react';
import './ProductsCoponents.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Ratings from '../Shared/Ratings/Ratings';
const ProductsAnoDetails = (props) => {
    const {id, title, description, price, img} = props.data
    return (
        <div>
            <div className="col-md-3 mb-5">
            <div class="card" style={{width: "18rem"}}>
           <div className="img_cart">
           <img style={{widht:'100%', height:'100%'}} src={img} class="card-img-top" alt="..."/>
           </div>
            <div class="card-body productTiletle">
              <div className="chekingArea d-flex justify-content-end">
                  <input type="checkbox" name="" id=""/>
              </div>
              <h5 class="card-title">{title}</h5>
              <h3 class="card-text text-secondary">{description}</h3>
              <h5 className="card-text" style={{color:'fef7a7'}}>${price}</h5>
              <div class="card-footer">
              <div className="LeanMoreAreaAndRating">
              <div className="Rating">
                  <div className="StarRating d-flex justify-content-center">
                      <Ratings/>
                  </div>
              </div>
              <div className="learnMore">
                  <p style={{color:'#fef7a7', fontFamily:'bien'}}>Ver más</p>
              </div>
            </div>
                </div>
             
            </div>
          </div>
            </div>
        </div>

    );
};

export default ProductsAnoDetails;