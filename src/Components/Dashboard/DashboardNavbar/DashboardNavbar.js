import React, { useEffect, useState } from 'react';
import '../../Shared/Navbar/Navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../../Resorce/Logo/logo.png'
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
    const [show, handleShow] = useState(false)
    return (
       <div className="row d-flex" style={{height:'100px'}}>
         <div className="col-md-2" style={{backgroundColor:'#2c2c2c'}}>
            <div className="d-flex justify-content-center align-items-center pt-4">
              <img src={logo} alt=""/>
            </div>
         </div>
         <div className="col-md-5 d-flex justify-content-end align-items-center" style ={{backgroundColor:'#fef7a7'}}>
            <div className="d-flex justify-content-end align-items-center">
            <a class="nav-link menuStyling active" href="#" style={{color:"black"}}>Inicio <span class="sr-only">(current)</span></a>
              <a class="nav-link menuStyling active" href="#" style={{color:"black"}}>Tienda</a>
              <a class="nav-link menuStyling active" href="#" style={{color:"black"}}>Subasta</a>
              <a class="nav-link menuStyling active" href="#" style={{color:"black"}}>Sé un distribuidor</a>
            </div>
         </div>
         <div className="col-md-5 d-flex justify-content-between align-items-center" style ={{backgroundColor:'#2c2c2c'}}>
            <div className="d-flex justify-content-center">
            <a class="nav-link menuStyling BlackScreen" href="#">Vender Colecciones</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Catálogo</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Contacto</a>
            </div>
            <div className="CartLogo pr-2 mt-3">
            <ShoppingCartIcon className='shopingCart'/>
          </div>
         </div>
       </div>
       
    );
};

export default DashboardNavbar;