import React, {useEffect} from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import TiendaHeader from '../TiendaHeader/TiendaHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './Tienda.css';
import { useState } from 'react';
import TiendaProducts from '../TiendaProducts/TiendaProducts';
const TiendaMain = () => {
    const [Expand, setExpand] = useState({
        expandMore:true,
        expandLess:false
    });
    const handleExpandMore = () => {
        const newUser = {...Expand}
        newUser.expandMore = false;
        newUser.expandLess = true;
        setExpand(newUser);
        
    };
    const handleExpandLess = () => {
        const newUser = {...Expand}
        newUser.expandMore = true;
        newUser.expandLess = false;
        setExpand(newUser)
    };
    useEffect(() => {
        Aos.init({duration:700})
    })
    return (
        <div>
            <Navbar/>
              <TiendaHeader/>
              <div className="row mt-5">
                  <div style={{borderRight:'1px solid lightgray'}} className="col-md-2 d-flex justify-content-center">
                     <div className="filterAreaTiando mb-5">
                         <h3 style={{fontFamily:'Bien'}}>Filtros</h3>
                        <div className="filterCatalogo d-flex justify-content-between mb-1">
                            <p>Filatelia</p>
                            {Expand.expandMore && <p onClick={handleExpandMore}><ExpandMoreIcon/></p>}
                            {Expand.expandLess && <p onClick={handleExpandLess}><ExpandLessIcon/></p>}
                        </div>
                       { Expand.expandLess && <div data-aos="fade-right" className="FiltrosCatagorys">
                            <input type="checkbox" name="" id=""/> <span> ÁLBUMES</span> <small className='text-secondary'>(345)</small>
                            <br/>
                            <input type="checkbox" name="" id=""/> <span> Accesorios</span> <small className='text-secondary'>(130)</small>
                            <br/>
                            <input type="checkbox" name="" id=""/> <span> Estampillas</span> <small className='text-secondary'>(45)</small>
                        </div>}
                        <div className="filterCatalogo d-flex justify-content-between mb-1">
                            <p>Numismática</p>
                            {Expand.expandMore && <p onClick={handleExpandMore}><ExpandMoreIcon/></p>}
                            {Expand.expandLess && <p onClick={handleExpandLess}><ExpandLessIcon/></p>}
                        </div>
                     </div>
                  </div>
                  <div className="col-md-10">
                      <TiendaProducts/>
                  </div>
              </div>
            <Footer/>
        </div>
    );
};

export default TiendaMain;