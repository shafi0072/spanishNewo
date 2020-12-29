import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Resorce/Logo/footerLogo.png';
import linekin from '../../Resorce/ContractIcon/linkedin-logo-01.png'
import FacebookPic from '../../Resorce/ContractIcon/Shafi-vai-facebook-logo-01.png'
import Twiter from '../../Resorce/ContractIcon/twitter-logo-01.png';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{backgroundColor:'#2c2c2c'}}>
        <footer  className=' pt-5 pb-5'>
        <div className="row">
            <div className="col-md-3 p-5">
            <h5 style={{color:'white'}}>Menú</h5>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Incio</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Teinda</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Subasta</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Se un distribuidor</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Vender Colecciones</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Catálogo</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Contacto</Link>
            <br/>
            </div>
            <div className="col-md-3 p-5">
            <h5 style={{color:'white'}}>Comprar</h5>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Cómo pujar</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Expertos</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Buenas prcticas comercials</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Pautas para el cumplimiento de la lay</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Supervision notarial</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Terminos del comprador</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Contacto</Link>
            </div>
            <div className="col-md-3 p-5">
            <h5 style={{color:'white'}}>Vender</h5>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Vender a subasta</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Consejos Para fotos</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Terminos del venedor</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Pautas para enviar lotes a subasta </Link>
            </div>
            <div className="col-md-3 p-5">
            <h5 style={{color:'white'}}>Iniciar</h5>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Iniciar sesion</Link>
            <br/>
            <Link style={{color:"white", textDecoration:'none'}} to=''>Registrate gratis
            </Link>
            
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex justify-content-end pr-5">
                    <div className="row ">
                        <div className="col-md-6 d-flex justify-content-end">
                        <img src={logo} alt=""/>
                        </div>
                        <div className="col-md-6">
                                    <img style={{width:'20%', marginRight:'30px!important'}} src={Twiter} alt=""/>
                                <img style={{width:'20%', marginRight:'30px!important'}} src={FacebookPic} alt=""/>
                                <img style={{width:'20%'}} src={linekin} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;