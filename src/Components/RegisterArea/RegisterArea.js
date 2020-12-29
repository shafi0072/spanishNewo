import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const RegisterArea = () => {
    return (
        <div>
            <Navbar/>
                <div className="registerArea text-center d-flex justify-content-center mt-5 mb-5">
                    <div className="RegisterButtons">
                        <Link to="/register/buyer"><button className="btn btn-warning p-5 mr-2"> <h2 style={{fontFamily:'Bien'}}>Continuar como compradora</h2> </button></Link>
                        <Link to="/register/seller"><button className="btn btn-warning p-5"> <h2 style={{fontFamily:'Bien'}}>Continuar como vendedora</h2> </button></Link>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default RegisterArea;