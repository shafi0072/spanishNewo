import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import SearchIcon from '@material-ui/icons/Search';
import SubastasPronto from './SubastasPronto';
const SubastasProducts = () => {
    const [subastasUpdate, setSubastasUpdate] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/subastasProducts')
        .then(res => res.json())
        .then(data => setSubastasUpdate(data))
    }, [])
    return (
        <div>
            <Navbar/>
              <div className="row mt-5 p-5">
                  <div className="col-md-6">
                    <h1 style={{fontFamily:'Bien'}}>Subastas</h1>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6 d-flex justify-content-between align-items-center bg-light " style={{border:'1px solid gray'}}>
                            <input type="text" name="searchBar" className="form-control bg-light" id="" style={{border:"none"}}/>
                            <SearchIcon/>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="row p-5">
                  <div className="col-md-2" style={{borderRight:'1px solid gray', height:'100vh'}}>
                  <h3 style={{fontFamily:'Bien'}}>Filtros</h3>
                  </div>
                  <div className="col-md-10">
                    <h3 style={{fontFamily:'Bien'}}>Subastas que cierran pronto</h3>
                    <div className="row">
                        {
                            subastasUpdate.map(data => <SubastasPronto data={data} />)
                        }
                    </div>
                  </div>
              </div>
            <Footer/>
        </div>
    );
};

export default SubastasProducts;