import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Slider from '../Slider/Slider';
import nicherIgpaserta from '../../../Resorce/nichertarpaserTa.png'
import stampbook from '../../../Resorce/Logo/Screenshot 2020-11-23 030906.png'
import './Header.css';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import backingImg from '../../../Resorce/SPAIN_Sc_1121_1124_Mint.jpg';
import dheImg from '../../../Resorce/dheu.svg';
import dagdag from '../../../Resorce/dagdag.svg'
import nichaerImg from '../../../Resorce/nicherImg.png'

const Header = () => {
    const [imageChange, setImageChange] = useState({
        back: true,
        forword: false,
        Accesorios: true,
        Estampllist:false

    })
    const handleArrowBack = () => {
        const newimg = {...imageChange}
        newimg.back = true
        newimg.forword = false
        newimg.Accesorios = true
        newimg.Estampllist = false
        setImageChange(newimg)
    }
    const handleArrowForward = () => {
        const newimg = {...imageChange}
        newimg.back = false
        newimg.forword = true
        newimg.Accesorios = false
        newimg.Estampllist = true
        setImageChange(newimg)

    }
    return (
        <div  className="">
            <div className="HeaderBg pb-5">
            <Navbar/>
            <div style={{marginTop:'100px'}}>
                <div className="row">
                    <div className="col-md-6 pr-5">
                        <div  className="d-flex justify-content-end">
                        <img style={{position:'relative', right:'85px', top:'108px'}} src={dheImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="ml-5">
                        <h1 className='HeadingFonts mb-4'>Binvenido</h1>
                        <h3 className="Primera">Primera Tienda Fiatélica <br/>
                            Online del Perú
                        </h3>
                        <Link to="/register/buyer"><button className="btn btn-dark pt-3 pb-3 pl-5 pr-5 mt-4 comprarBtn"><h5 >Comprar ahora</h5></button></Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex align-items-end">
                        {imageChange.back&&<img style={{width:'70%'}} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStzA4i57k_Wrs3KmDROq6vg9gPHVAAclpxw&usqp=CAU" alt=""/>}
                        {imageChange.forword&&<img style={{width:'70%'}} className='img-fluid' src={backingImg} alt=""/>}
                        <div className="buttons">
                   <button onClick={handleArrowBack} className='ArrowButton'><ArrowBackIosIcon/></button>
                   <button onClick={handleArrowForward} className='ArrowButton'><ArrowForwardIosIcon/></button>
                   </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                    
                    </div>
                </div>
                {imageChange.Accesorios&&<div className="row">
                <div className="col-md-8">
                    <div className="MainDivForBottom">
                        <div className="BottomContent">
                           <div className="row ConetentForBottomDiv">
                            <div className="col-sm-6">
                            <div className="leftCOl">
                            <h1 className='AccesoriesFonts'>Accesorios</h1>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia distinctio sunt nemo quibusdam dolore animi </h6>
                            </div>
                            </div>
                            <div style={{padding: "10px"}} className=" col-sm-6">
                                <div className="right_content">
                                <h2 style={{fontFamily:"'Prata', serif"}} className='text-center'>Encuentra más te</h2>
                                <h1 >1200 accesorios</h1>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img style={{position:'relative', right:'36%', bottom:'10%'}} src={dagdag} alt=""/>
                </div>
            </div>}
            {imageChange.Estampllist&&<div className="row">
                <div className="col-md-8">
                    <div className="MainDivForBottom">
                        <div className="BottomContent">
                           <div className="row ConetentForBottomDiv">
                            <div className="col-sm-6">
                            <div className="leftCOl">
                            <h1 className='AccesoriesFonts'>Estampillas</h1>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia distinctio sunt nemo quibusdam dolore animi </h6>
                            </div>
                            </div>
                            <div style={{padding: "10px"}} className=" col-sm-6">
                                <div className="right_content">
                                <h2 style={{fontFamily:"'Prata', serif"}} className='text-center'>Encuentra más te</h2>
                                <h1 >1200 accesorios</h1>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <img style={{position:'relative', right:'36%', bottom:'10%'}} src={dagdag} alt=""/>
                </div>
            </div>}
            </div>
            </div>
            <div className="container mt-5">
              
            <Slider/>

            </div>
            <div className="row mt-5 mb-5">
       <div className="col-md-12 d-flex justify-content-end">
       <div className="SeeAll">
       <h2 className='text-center seemoreArea' style={{}}>ver todos los productos</h2>
   </div>
       </div>
      </div>
      <div className="row" style={{backgroundColor:'#fef7a7'}}>
        <div className="col-md-6 Distributor">
            <h1 className='AccesoriesFonts ' style={{color:'black'}}> Conviértete en <br/> distribuidor</h1>
            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fugiat molestias dignissimos consectetur autem placeat quo, eaque exercitationem ratione sed impedit magni debitis facilis, rerum deleniti expedita eius. Rerum, quos! Suscipit magnam atque adipisci odit rerum culpa id molestiae iusto perspiciatis est modi placeat, repudiandae distinctio repellat cumque. Nostrum facilis sapiente blanditiis sint culpa. Alias labore in ut optio, sequi mollitia neque sit architecto laudantium dolor, pariatur, dolorem ea a iure tempora corporis tempore quasi eveniet doloremque ullam ab voluptatem tenetur! Saepe amet aspernatur atque veritatis assumenda accusamus tempora ipsam architecto et corrupti beatae, numquam iusto harum eum officiis ipsa.</h6>
            <button className="btn btn-dark pt-3 pb-3 pl-5 pr-5 mt-4 comprarBtn"><h5 >Comprar ahora</h5></button>
        </div>
        <div className="col-md-6 OldManImage">
            <img style={{position:'relative', right:'17%', top:'5%'}} src={dheImg} alt=""/>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-md-4 d-flexalign-item-center">
            <img src={nichaerImg} style={{maxWidth:'100%'}} className='img-fluid' alt=""/>
            <img style={{position:'relative', bottom:'10%'}} src={nicherIgpaserta} alt=""/>
        </div>
        <div className="col-md-8">
            <h1 className='AccesoriesFonts mb-5' style={{color:'black'}}>¿porqué comenzar con filatelia?</h1>
            
            <h6 style={{marginRight:'30%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fugiat molestias dignissimos consectetur autem placeat quo, eaque exercitationem ratione sed impedit magni debitis facilis, rerum deleniti expedita eius. Rerum, quos! Suscipit magnam atque adipisci odit rerum culpa id molestiae iusto perspiciatis est modi placeat, repudiandae distinctio repellat cumque. Nostrum facilis sapiente blanditiis sint culpa. Alias labore in ut optio, sequi mollitia neque sit architecto laudantium dolor, pariatur, dolorem ea a iure tempora corporis tempore quasi eveniet doloremque ullam ab voluptatem tenetur! Saepe amet aspernatur atque veritatis assumenda accusamus tempora ipsam architecto et corrupti beatae, numquam iusto harum eum officiis ipsa.</h6>
            <button className="btn btn-dark pt-3 pb-3 pl-5 pr-5 mt-5 comprarBtn"><h5 >Comprar ahora</h5></button>

        </div>
      </div>
       <Footer/>
        </div>
        
    );
};

export default Header;