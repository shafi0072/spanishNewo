import React, {useEffect, useState} from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import '../../Catalog/CatalogoOverView/catalogoOver.css'
import Ratings from '../../Shared/Ratings/Ratings';
import {useParams} from 'react-router-dom';
import Slider2 from '../../Catalog/CatalogoOverView/Slider2';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const TiendaDetails = () => {
    const {id} = useParams();
    const [products, setProducts] = useState({
        Color:"",
        Tamaño:""
    })
    const {name, img, description} = products;
    const hanldeAddToCart = (e) => {
        fetch(`http://localhost:5000/cartforTienda`,{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(products)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
               console.log('its posted on database');
            }
        })
    }
    useEffect(() => {
        fetch(`http://localhost:5000/findByID/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-md-6 pl-5 d-flex justify-content-end">

                    <Slider2 data={products}/>

                </div>
                <div className="col-md-6 mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detailsArea mt-5 p-3">
                                <h3
                                    style={{
                                        fontFamily: 'Bien'
                                    }}>{name}</h3>
                                <div className="mt-2">
                                    <div className="row">
                                        <div className="col-md-6 d-flex justify-content-between">
                                            <Ratings/>
                                            <h6 className='mt-2'>67 opiniones</h6>
                                        </div>
                                        <div className="col-md-6"></div>
                                    </div>
                                    <div className="mt-2">
                                        <h1
                                            style={{
                                                fontFamily: 'Bien'
                                            }}>S/278</h1>
                                    </div>
                                    <div className="mt-2">
                                        <p
                                            style={{
                                                color: '#dec064'
                                            }}>Ver gastos de envio</p>
                                    </div>
                                    <div className="mt-2">
                                        <p>Descripción</p>
                                    </div>
                                    <div className=" row mt-2">
                                        <div className="col-md-6">
                                            <div className="d-flex justify-content-between" style={{borderBottom:'1px solid gray'}}>
                                            <p>Color</p>
                                            <ExpandMoreIcon/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="d-flex justify-content-between" style={{borderBottom:'1px solid gray'}}>
                                            <p>Tamaño</p>
                                            <ExpandMoreIcon/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <small className='text-secondary'>
                                            {description}
                                        </small>
                                    </div>
                                    <div className="mt-2">
                                        <h6>Stock disponible</h6>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-4 d-flex justify-content-between">
                                            <RemoveIcon/>
                                            <input type="number" style={{width:'40%'}} className="text-center" name="quentity" value="1" id=""/>
                                            <AddIcon/>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4"></div>
                                    </div>
                                    <div className="mt-5">
                                        <button
                                            style={{
                                                backgroundColor: '#2c2c2c',
                                                border: 'none',
                                                color: 'white',
                                                fontFamily: 'Bien'
                                            }}
                                            className="form-control">Comprar ahora</button>
                                        <br/>
                                        <button
                                            onClick={hanldeAddToCart}
                                            style={{
                                        
                                                backgroundColor: 'white',
                                                border: '1px solid black',
                                                color: '#2c2c2c',
                                                fontFamily: 'Bien'
                                            }}
                                            className="form-control">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TiendaDetails;