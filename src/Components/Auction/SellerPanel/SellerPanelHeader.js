import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import GavelIcon from '@material-ui/icons/Gavel';
import StoreIcon from '@material-ui/icons/Store';
import StarIcon from '@material-ui/icons/Star';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
const SellerPanelHeader = () => {
    return (
        <div style={{backgroundColor:'#f5f2f2'}}>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-start align-items-center ml-5">
                   <Link> 
                   <div style={{backgroundColor:'#2c2c2c', color:'white',width:'70px',height:'70px', borderRadius:'100%'}} className=' d-flex align-items-center justify-content-center'>
                    <ArrowBackIosIcon fontSize='large'/>
                    </div>
                    </Link>
                    <h1 style={{fontFamily:'Bien', fontSize:'45px'}} className='ml-3'>Qué vas a subastar <br/> hoy?</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className='d-flex justify-content-between pr-3 mt-4'>
                        <li className='d-flex justify-content-start'><GavelIcon/> <h5 style={{fontFamily:'Bien'}}> Subastas</h5></li>
                        <li className='d-flex justify-content-start'><StoreIcon/> <h5 style={{fontFamily:'Bien'}}> Tienda</h5></li>
                        <li className='d-flex justify-content-start'><StarIcon/> <h5 style={{fontFamily:'Bien'}}> Mi Mancolista</h5></li>
                        <li className='d-flex justify-content-start'><SettingsIcon/> <h5 style={{fontFamily:'Bien'}}> Configuración</h5></li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <div className="d-flex justify-content-start align-items-center mr-4" style={{backgroundColor:'white'}}>
                                <input type="text" style={{border:'none', padding:'5px 0px'}}/>
                                <SearchIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerPanelHeader;