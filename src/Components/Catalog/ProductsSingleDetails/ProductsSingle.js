import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from "react-slick";
import ProductsSignleDetailsIgm from './ProductsSignleDetailsIgm';
import './ProductsSingle.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const ProductsSingle = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const FakeImgForDetails = [
        {
            id: 1,
            img1: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of' +
                    '_Spain.jpg'
        }, {
            id: 2,
            img1: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of' +
                    '_Spain.jpg'
        }, {
            id: 3,
            img1: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/The_first_postage_stamp_of' +
                    '_Spain.jpg'
        }
    ]
    const date = new Date()
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-md-6 container ImageAra">
                    <h1
                        style={{
                            fontFamily: 'Bien',
                            color: 'black'
                        }}>1935- III Centenario Fundación de
                        <br/>
                        la Ciudad de Ica</h1>
                    <div className="SliderImg">
                        <ProductsSignleDetailsIgm/>

                    </div>
                    <h6 className="text-secondary">1935- III Centenario Fundación de la Ciudad de Ica</h6>
                    <small className="text-secondary mt-2">Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Odit quia consequatur fugiat aspernatur veritatis repudiandae
                        esse quas nostrum velit ipsam? Laboriosam tempore tenetur nisi eaque sapiente
                        dignissimos saepe nostrum itaque corporis voluptatibus, dolorem repellendus
                        aliquid sint numquam voluptas. Veniam atque mollitia cupiditate adipisci sed
                        totam, earum assumenda veritatis omnis harum laboriosam hic sint reiciendis
                        sapiente magnam explicabo velit consequuntur deleniti sunt in voluptate fuga?
                        Molestiae iste magnam sint eligendi impedit voluptatibus deleniti deserunt
                        veniam odio sit mollitia incidunt labore magni id laboriosam consectetur iure,
                        reprehenderit repellendus, molestias totam fuga recusandae. Amet hic aliquid
                        culpa modi eveniet nostrum. Accusamus asperiores nihil aspernatur qui impedit
                        sint facilis corporis quo dignissimos exercitationem, obcaecati veritatis illum
                        voluptate laborum libero magni maxime id vel corrupti quidem dolorem ipsum
                        laboriosam ea sequi? Eveniet alias quaerat ipsum necessitatibus a harum.
                        Sapiente, exercitationem accusamus est alias error maxime nostrum expedita
                        voluptatem dignissimos, pariatur quod placeat in laudantium fugiat fuga maiores
                        illum suscipit corporis. Placeat itaque ut eaque suscipit.</small>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mainAeaOfDealingCatlogo mt-5">
                                <div className="CatalogHeader text-center">
                                    <h4
                                        style={{
                                            fontFamily: 'Bien',
                                            color: 'white'
                                        }}>Cierra en 12h 30m 18s</h4>
                                </div>
                                <div className="catalogBody">
                                    <div className="catbodyText container mt-2">
                                        <h4
                                            style={{
                                                fontFamily: 'Bien'
                                            }}>Puja actual S/1,250</h4>
                                        <p
                                            style={{
                                                color: '#dab851'
                                            }}>La puja actual aún está por debajo
                                            <br/>
                                            de la estimación</p>
                                        <p className='text-secondary'>Estimación del experto S/1890 - S/2,105</p>
                                    </div>
                                </div>
                                <div className="catalogBody">
                                    <div className="catbodyText container mt-2">
                                        <h4
                                            style={{
                                                fontFamily: 'Bien'
                                            }}>Siguiente puja mínima S/1,300</h4>

                                        <p className='text-secondary'>Las pujas incluyen la comisión de la
                                            <br/>
                                            subasta y los gastos de envio</p>
                                    </div>
                                </div>
                                <div className="catalogBody">
                                    <div className="catbodyText container mt-2">
                                        <p
                                            style={{
                                                color: '#dab851'
                                            }}>La puja actual aún está por debajo
                                            <br/>
                                            de la estimación</p>
                                        <h4
                                            style={{
                                                fontFamily: 'Bien'
                                            }}>Puja rápida</h4>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <button className="btn btn-dark">S/1,300</button>
                                            </div>
                                            <div className="col-md-3">
                                                <button className="btn btn-dark">S/1,300</button>
                                            </div>
                                            <div className="col-md-3">
                                                <button className="btn btn-dark">S/1,300</button>
                                            </div>
                                            <div className="col-md-3">
                                                <button className="btn btn-dark">S/1,300</button>
                                            </div>
                                        </div>
                                        <h4
                                            className='mt-3'
                                            style={{
                                                fontFamily: 'Bien'
                                            }}>Puja manual</h4>
                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-12">
                                                <form class="form-inline my-2 my-lg-0">
                                                    <input
                                                        class="form-control "
                                                        type="search mr-2"
                                                        style={{
                                                            width: '80%'
                                                        }}
                                                        placeholder="Search"
                                                        aria-label="Search"/>
                                                    <button class="btn btn-dark my-2 my-sm-0" type="submit">Pujar</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mainDetailsAreaAboutCard mt-5">
                                <div className="MainHeaderHere text-center">
                                    <h4
                                        style={{
                                            fontFamily: 'Bien',
                                            color: 'white'
                                        }}>Pujas recientes</h4>

                                </div>
                                <div className="CaTBODy">
                                    <div className="CatBodyDev text-center mt-2">
                                        <small className='text-secondary'>Pujador 1,230</small>
                                        <p>November 30, 2020 11:29 PM</p>
                                        <h5>S/1,050</h5>
                                    </div>
                                    <div className="CatBodyDev text-center mt-2">
                                        <small className='text-secondary'>Pujador 1,230</small>
                                        <p>November 30, 2020 11:29 PM</p>
                                        <h5>S/1,050</h5>
                                    </div>
                                    <div className="CatBodyDev text-center mt-2">
                                        <small className='text-secondary'>Pujador 1,230</small>
                                        <p>November 30, 2020 11:29 PM</p>
                                        <h5>S/1,050</h5>
                                    </div>
                                    <div className="CatBodyDev text-center mt-2">
                                        <small className='text-secondary'>Pujador 1,230</small>
                                        <p>November 30, 2020 11:29 PM</p>
                                        <h5>S/1,050</h5>
                                    </div>
                                    <div className="CatBodyDev text-center mt-2">
                                        <small className='text-secondary'>Pujador 1,230</small>
                                        <p>November 30, 2020 11:29 PM</p>
                                        <h5>S/1,050</h5>
                                    </div>

                                </div>
                                <p
                                    style={{
                                        color: '#dab851'
                                    }}
                                    className='text-center mt-3'>ver todos las pujas</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mr-5">
                        <div style={{borderBottom:'1px solid gray'}} className=" col-md-12 detailsdellot d-flex justify-content-between mt-5">
                            <h1 style={{fontFamily:'Bien'}}>Detalles del lote</h1>
                            <ExpandMoreIcon fontSize="large"/>
                        </div>
                        <div style={{borderBottom:'1px solid gray'}} className=" col-md-12 detailsdellot d-flex justify-content-between mt-5">
                        <h1 style={{fontFamily:'Bien'}}>Envío</h1>
                        <ExpandMoreIcon fontSize="large"/>
                    </div>
                    <div style={{borderBottom:'1px solid gray'}} className=" col-md-12 detailsdellot d-flex justify-content-between mt-5">
                    <h1 style={{fontFamily:'Bien'}}>Vendedor</h1>
                    <ExpandMoreIcon fontSize="large"/>
                </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductsSingle;