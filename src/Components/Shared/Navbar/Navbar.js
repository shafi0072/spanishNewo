import React, { useEffect, useState } from 'react';
import './Navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logoImg from '../../../Resorce/logo.png';

import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, handleShow] = useState(false)
 
    return (
        <div className={`navBg ${show && "navBlack"}`}>
        <nav class="navbar navbar-expand-lg navbar-light">
        <Link class="navbar-brand" to="/home"><img className='m-4' src={logoImg} alt=""/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse fullMenu" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-5">
            <a class="nav-link menuStyling active" href="#">Inicio <span class="sr-only">(current)</span></a>
            <Link class="nav-link menuStyling active" to="/tiendaMain">Tienda</Link>
            <Link class="nav-link menuStyling active" to="/subastas">Subasta</Link>
            <a class="nav-link menuStyling active" href="#">Sé un distribuidor</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Vender Colecciones</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Catálogo</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Contacto</a>
          </div>
          <div className="CartLogo pr-2">
            <ShoppingCartIcon className='shopingCart'/>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;