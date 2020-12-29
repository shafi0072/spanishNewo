import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './CatalogoMain.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import AnoComponents from '../AnoComponents/AnoComponents';
const CatalogoMain = () => {
    const [click, setClick] = useState({
        isAno: true,
        isTema:false,
        isCatagoria: false,
        isColeccion:false,
        isTodos:false,
    })
    const handleOnClickAno = () => {
        const newClick = {...click}
        newClick.isAno = true;
        newClick.isTema= false;
        newClick.isCatagoria= false;
        newClick.isColeccion = false;
        newClick.isTodos = false;

        setClick(newClick);
    }
    const handleTema = () => {
        const newClick = {...click}
        newClick.isAno = false;
        newClick.isTema= true;
        newClick.isCatagoria= false;
        newClick.isColeccion = false;
        newClick.isTodos = false;

        setClick(newClick);
    }
    const handleCatagoria = () => {
        const newClick = {...click}
        newClick.isAno = false;
        newClick.isTema= false;
        newClick.isCatagoria= true;
        newClick.isColeccion = false;
        newClick.isTodos = false;

        setClick(newClick);
    };
    const handleColeccion = () => {
        const newClick = {...click}
        newClick.isAno = false;
        newClick.isTema= false;
        newClick.isCatagoria= false;
        newClick.isColeccion = true;
        newClick.isTodos = false;

        setClick(newClick);
    };
    const hanldeTodos = () => {
        const newClick = {...click}
        newClick.isAno = false;
        newClick.isTema= false;
        newClick.isCatagoria= false;
        newClick.isColeccion = false;
        newClick.isTodos = true;

        setClick(newClick);
    }
    return (
        <div>
        <Navbar/>
            <div style={{heigh:'100%'}} className="row">
                <div className="col-md-6 pl-5 pt-2" style={{backgroundColor:'#2c2c2c'}}>
                    <div className="row">
                        <div className="col-md-6">
                        <h1 className="text-light mt-5 CatalogoHeading">Buscar por </h1>
                        <div className="p-5">
                        <ul style={{listStyle:'none'}}>
                        <Link style={{textDecoration:'none'}}>
                            <li onClick={handleOnClickAno} className='CataroryList'>{click.isAno&&<ArrowForwardIosIcon style={{color:'#fef7a7'}}/>} Año</li>
                        </Link>
                        <Link style={{textDecoration:'none'}}>
                            <li onClick={handleTema} className='CataroryList'>{click.isTema&&<ArrowForwardIosIcon style={{color:'#fef7a7'}}/>} Tema</li>
                        </Link>
                        <Link style={{textDecoration:'none'}}>
                            <li onClick={handleCatagoria} className='CataroryList'>{click.isCatagoria&&<ArrowForwardIosIcon style={{color:'#fef7a7'}}/>} Categoría</li>
                        </Link>
                        <Link style={{textDecoration:'none'}}>
                            <li onClick={handleColeccion} className='CataroryList'>{click.isColeccion&&<ArrowForwardIosIcon style={{color:'#fef7a7'}}/>} Colección</li>
                        </Link>
                        <Link style={{textDecoration:'none'}}>
                            <li onClick={hanldeTodos} className='CataroryList'>{click.isTodos&&<ArrowForwardIosIcon style={{color:'#fef7a7'}}/>} Todos</li>
                        </Link>
                    </ul>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="FullSearchArea">
                        <img className="searChBackingImage" src="https://i.colnect.net/f/170/938/Santissima_Trinidad.jpg" alt=""/>
                        <div className="SearchBox">
                        <h5 className="SearchLable">Búsqueda general</h5>
                            <div style={{backgroundColor:'white'}} className="inputDiv">
                        
                                <input type="text" className='form-control SearchForm' name="" id="" placeholder="Search"/>
                                <SearchIcon/>
                            </div>
                        </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 style={{color:'#fef7a7', fontFamily:'Bien'}}>Sugerencia</h3>
                            <p style={{color:'white', fontSize:'18px'}}>
                            Elige el filtro que se aplique a tue busqueda.Del lado derecho aparceran los filtros secundarios para que elijas el que mejor se acomode a tus necesidades 
                            </p>
                            <p style={{color:'white', fontSize:'18px'}}>
                                También puedes hacer una busqueda en la caja de busqueda de la parte superior.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <AnoComponents/>
             </div>
            </div>
            <div className="PorductsArea">
                
            </div>
            <Footer/>
        </div>
    );
};

export default CatalogoMain;