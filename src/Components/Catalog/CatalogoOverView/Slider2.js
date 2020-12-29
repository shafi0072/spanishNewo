import React from 'react';
import './catalogoOver.css'
const Slider2 = (props) => {
    const {img} = props.data;
    return (
        <div className='sliderMainArea mt-5 mb-5'>
            <div
                id="carouselExampleControls "
                class="carousel slide carArea"
                data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item  active">
                        <div className="d-flex justify-content-center">
                            <img style={{width:'50%'}}
                                class="d-block w-10 text-center mt-5 mb-5"
                                src={`http://localhost:5000/${img}.jpeg`}
                                alt="First slide"/>
                        </div>
                    </div>
                    <div class="carousel-item  ">
                        <div className="d-flex justify-content-center">
                            <img
                            style={{width:'50%'}}
                                class="d-block w-10 text-center mt-5 mb-5"
                                src={`http://localhost:5000/${img}.jpeg`}
                                alt="First slide"/>
                        </div>
                    </div>
                    <div class="carousel-item  ">
                        <div className="d-flex justify-content-center">
                            <img
                            style={{width:'50%'}}
                                class="d-block w-10 text-center mt-5 mb-5"
                                src={`http://localhost:5000/${img}.jpeg`}
                                alt="First slide"/>
                        </div>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev">
                    <span class="carousel-control-prev-icon previousBtn" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next">
                    <span class="carousel-control-next-icon  nextBtn" aria-hidden="true"></span>
                    <span class="sr-only ">Next</span>
                </a>
            </div>
            <div className="row mt-3">
        <div className="col-md-4">
        <div class="card" style={{width: "12rem"}}>
        <div className="d-flex justify-content-center">
        <img class="card-img-top" style={{width:'70%'}} src={`http://localhost:5000/${img}.jpeg`}/>
        </div>
      </div>
        </div>
        <div className="col-md-4">
        <div class="card" style={{width: "12rem", border:'1px solid gray'}}>
        <div className="d-flex justify-content-center">
        <img class="card-img-top" style={{width:'70%'}} src={`http://localhost:5000/${img}.jpeg`}/>
        </div>
      </div>
        </div>
        <div className="col-md-4">
        <div class="card " style={{width: "12rem"}}>
       <div className="d-flex justify-content-center">
       <img class="card-img-top" style={{width:'70%'}} src={`http://localhost:5000/${img}.jpeg`} alt="Card image cap"/>
       </div>
      
      </div>
        </div>
    </div>
        </div>
    );
};

export default Slider2;