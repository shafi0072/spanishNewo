import React from 'react';
import './TiendaHeader.css';
import SearchIcon from '@material-ui/icons/Search';
const TiendaHeader = () => {
    return (
        <div className='TiendaHeader'>
            <div className="row">
                <div className="col-md-6 pl-5 pt-5">
                    <h1 
                        style={{
                            fontFamily: 'Bien'
                        }}>Bienvenido a nuestra tienda</h1>
                    <h3
                        style={{
                            fontFamily: 'Bien'
                        }}>¿Qué estás buscand hoy?</h3>
                    <div
                        className="searchAreaForTienda d-flex justify-content-between align-items-center mt-3">
                        <input type="text" name="" className='form-control' id=""/>
                        <button
                            style={{
                                backgroundColor: 'white',
                                border: 'none'
                            }}><SearchIcon/></button>
                    </div>
                    <h6 className='mt-5 mb-5'>Más de 10,678 Artículos hoy</h6>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
    );
};

export default TiendaHeader;