import React from 'react';
import './ProductsSingle.css';
const ProductsSignleDetailsIgm = (props) => {
   
    return (
        <div className='SiderImgArea'>
        <div id="carouselExampleControls " class="carousel slide carArea" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item  active">
            <div className="d-flex justify-content-center">
            <img class="d-block w-10 text-center" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of_Spain.jpg" alt="First slide"/>
            </div>
            </div>
            <div class="carousel-item  ">
            <div className="d-flex justify-content-center">
            <img class="d-block w-10 text-center" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of_Spain.jpg" alt="First slide"/>
            </div>
            </div>
            <div class="carousel-item  ">
            <div className="d-flex justify-content-center">
            <img class="d-block w-10 text-center" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of_Spain.jpg" alt="First slide"/>
            </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon BtnColor" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon BtnColor" aria-hidden="true"></span>
            <span class="sr-only ">Next</span>
        </a>
        </div>
        <div className="row mt-3">
        <div className="col-md-4">
        <div class="card" style={{width: "12rem"}}>
        <div className="d-flex justify-content-center">
        <img class="card-img-top" style={{width:'70%'}} src="https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of_Spain.jpg" alt="Card image cap"/>
        </div>
      </div>
        </div>
        <div className="col-md-4">
        <div class="card" style={{width: "12rem", border:'1px solid gray'}}>
        <div className="d-flex justify-content-center">
        <img class="card-img-top" style={{width:'70%'}} src="https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of_Spain.jpg" alt="Card image cap"/>
        </div>
      </div>
        </div>
        <div className="col-md-4">
        <div class="card " style={{width: "12rem"}}>
       <div className="d-flex justify-content-center">
       <img class="card-img-top" style={{width:'70%'}} src="https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of_Spain.jpg" alt="Card image cap"/>
       </div>
      
      </div>
        </div>
    </div>
        </div>
       
    );
};

export default ProductsSignleDetailsIgm;