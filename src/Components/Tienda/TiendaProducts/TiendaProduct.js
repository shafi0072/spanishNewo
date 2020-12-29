import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link, useParams } from 'react-router-dom';
const TiendaProduct = (props) => {
    const {name, img, price , Key} = props.data;
    
    return (
        
        <div className='col-md-4 mb-5'>
            
            <div class="card" style={{width: "23rem", height:'23rem'}}>
                
               <div className="d-flex justify-content-center">
               <div className="w-70 mt-3 mb-3">
               <img src={`http://localhost:5000/${img}.jpeg`} style={{width:'210px',height:'200px'}} class="card-img-top" alt="..."/>
               </div>
               </div>
                <div class="card-body" style={{backgroundColor:'#f5f2f2'}}>
                    <div className="row">
                        <div className="col-md-6">
                        <h3 className='text-dark' style={{fontFamily:"Bien"}}>S/{price}</h3>
                        <p>{name}</p>
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex justify-content-end'>
                            <FavoriteBorderIcon/>
                            </div>
                            <Link style={{color:'black', textDecoration:'none'}} to={`/tiendaDetails/${Key}`}>
                            <div className='d-flex justify-content-end mt-5'>
                            <big style={{color:'#e4cd8c'}}>ver más</big>
                            </div>
                            </Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
    );
};

export default TiendaProduct;