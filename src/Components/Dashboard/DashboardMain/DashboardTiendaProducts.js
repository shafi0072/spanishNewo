import React from 'react';

const DashboardTiendaProducts = (props) => {
    const {name, price, categories, description,img} = props.date;
    return (
        <div className="row bg-light p-2 mt-3" >
        <div className="col-md-2 mt-1 d-flex text-center">
            <input type="checkbox" className='mt-1 mr-1' name="" id=""/>
            <small style={{fontFamily:'Bien'}} className='text-dark'>{name}</small>
        </div>
        <div className="col-md-2 mt-1 text-center">
        <small style={{fontFamily:'Bien'}} className='text-dark'>Hello its Categoris</small>
        </div>
        <div className="col-md-4 mt-1 text-center">
        <small style={{fontFamily:'Bien'}} className='text-dark'>{description}</small>
        </div>
        <div className="col-md-3 mt-1 text-center">
        <small style={{fontFamily:'Bien'}} className='text-dark'> {price}</small>
        </div> <div className="col-md-1 mt-1 text-center">
        <img style={{width:'100%'}} src={`http://localhost:5000/${img}.jpeg`} alt=""/>
        </div>
    </div>
    );
};

export default DashboardTiendaProducts;