import React from 'react';

const DashboardTiendaProducts = () => {
    return (
        <div className="row bg-light p-2 mt-3" >
        <div className="col-md-2 mt-1 d-flex text-center">
            <input type="checkbox" className='mt-1 mr-1' name="" id=""/>
            <small style={{fontFamily:'Bien'}} className='text-dark'>Hello Its products</small>
        </div>
        <div className="col-md-2 mt-1 text-center">
        <small style={{fontFamily:'Bien'}} className='text-dark'>Hello its Categoris</small>
        </div>
        <div className="col-md-4 mt-1 text-center">
        <small style={{fontFamily:'Bien'}} className='text-dark'> hello its Descipción</small>
        </div>
        <div className="col-md-3 mt-1 text-center">
        <small style={{fontFamily:'Bien'}} className='text-dark'> hello its Precio</small>
        </div> <div className="col-md-1 mt-1 text-center">
        <small style={{fontFamily:'Bien'}} className='text-dark'> hello its Imagen</small>
        </div>
    </div>
    );
};

export default DashboardTiendaProducts;