import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './ProductsCoponents.css';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ProductsAnoDetails from './ProductsAnoDetails';
const ProductsCopomponents = ({name, Catalogo, Catagories}) => {
    const fakeDataForProducts =[{
        "id": 1,
        "title": "Averill",
        "description": "Longland",
        "price": 87,
        "img": "http://dummyimage.com/228x234.jpg/dddddd/000000"
      }, {
        "id": 2,
        "title": "Sharona",
        "description": "Worlidge",
        "price": 92,
        "img": "http://dummyimage.com/161x123.jpg/dddddd/000000"
      }, {
        "id": 3,
        "title": "Conroy",
        "description": "Martinolli",
        "price": 77,
        "img": "http://dummyimage.com/221x178.bmp/dddddd/000000"
      }, {
        "id": 4,
        "title": "Marcelo",
        "description": "Overill",
        "price": 56,
        "img": "http://dummyimage.com/198x231.png/dddddd/000000"
      }, {
        "id": 5,
        "title": "Ailina",
        "description": "Flack",
        "price": 81,
        "img": "http://dummyimage.com/229x130.jpg/dddddd/000000"
      }, {
        "id": 6,
        "title": "Torrie",
        "description": "Dolohunty",
        "price": 63,
        "img": "http://dummyimage.com/120x245.bmp/5fa2dd/ffffff"
      }, {
        "id": 7,
        "title": "Worthy",
        "description": "Billyeald",
        "price": 60,
        "img": "http://dummyimage.com/224x235.jpg/ff4444/ffffff"
      }, {
        "id": 8,
        "title": "Syman",
        "description": "Dewick",
        "price": 29,
        "img": "http://dummyimage.com/163x193.png/cc0000/ffffff"
      }]
    return (
        <div>
           <div className="MainHeader">
           <Navbar/>
           <div className="menuDIvMain ">
           <div className="menuBarForCatalogo">
            <ChevronLeftIcon fontSize="large" className='arrowBack ml-2'/>
           <h1 style={{fontFamily:'Bien', marginLeft:'20px'}}>Buscar por</h1>
           <div className="CatagoryNames ml-5">
           <h3 style={{fontFamily:'Bien'}}>{Catagories}</h3>
           <KeyboardArrowRightIcon fontSize="large" style={{color:'#dcba57'}}/>
           <h3 style={{fontFamily:'Bien'}}>{name}</h3>
           <KeyboardArrowRightIcon fontSize="large" style={{color:'#dcba57'}}/>
           <h3 style={{fontFamily:'Bien'}}>{Catalogo}</h3>
           </div>
       </div>
        <div className="SearchBar">
            <div className="searchBarInputAndA">
                <input type="text" className="form-control SerachInputDesign" placeholder='Search.....'/>
                <SearchIcon/>
            </div>
        </div>
           </div>
           </div>
           <div className="ProductArea container">
                <div className="container">
                    <div className="row rowProject">
                        {
                            fakeDataForProducts.map(data => <ProductsAnoDetails data={data}/>)
                        }
                    </div>
                </div>
           </div>
            <Footer/>
        </div>
    );
};

export default ProductsCopomponents;