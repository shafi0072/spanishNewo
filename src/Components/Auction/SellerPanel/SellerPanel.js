import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import SellerPanelHeader from './SellerPanelHeader';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
const SellerPanel = () => {

    const [subastasDetails, setSubastasDetails] = useState({
        Nombre:"",
        Año:"",
        MNH:"",
        MINT:'',
        Usado:'',
        sobre:'',
        email:'',
        Origen:"",
        No:'',
        Si:'',
        Descipción:'',
        Ingresos:'',
        Precio:''

    });
    const handleOnChange = (e) => {
        const newSubastas = {...subastasDetails};
        newSubastas[e.target.name] = e.target.value;
        setSubastasDetails(newSubastas)
    };
    const [files, setFile] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
 const handleSubmit = (e) => {
    const formData = new FormData()
    formData.append('file', files);
    formData.append('Nombre', subastasDetails.Nombre);
    formData.append('Año', subastasDetails.Año);
    formData.append('MNH', subastasDetails.MNH);
    formData.append('MINT', subastasDetails.MINT);
    formData.append('Usado', subastasDetails.Usado);
    formData.append('sobre', subastasDetails.sobre);
    formData.append('email', subastasDetails.email);
    formData.append('Origen', subastasDetails.Origen);
    formData.append('No', subastasDetails.No);
    formData.append('Si', subastasDetails.Si);
    formData.append('Descipción', subastasDetails.Descipción);
    formData.append('Ingresos', subastasDetails.Ingresos);
    formData.append('Precio', subastasDetails.Precio);
    
    fetch('http://localhost:5000/subastas/stamp', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })

 }


    return (
        <div>
            <Navbar/>
                <SellerPanelHeader/>
                <form onSubmit={handleSubmit} action="">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div style={{width:'80%'}}>
                        <div className="ml-5">
                            <h3 style={{fontFamily:'Bien'}}>Información General</h3>
                            
                                <div className="form-group">
                                    <h6 style={{color:'#ada9a9', fontFamily:"Bien"}} htmlFor="exampleFormControlInput1">Nombre del producto</h6>
                                    <input type="text" onChange={handleOnChange} className="form-control" name="Nombre" id="exampleFormControlInput1" placeholder="Nombre del producto"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6 style={{color:'#ada9a9', fontFamily:"Bien"}} htmlFor="exampleFormControlInput1">Año de emisión</h6>
                                            <input onChange={handleOnChange} type="number" className="form-control" name="Año" id="exampleFormControlInput1" placeholder="Año"/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                    <h6 style={{color:'#ada9a9', fontFamily:"Bien"}} htmlFor="exampleFormControlInput1">Estado</h6>
                                        <div className="row">
                                        
                                            <div className="col-md-4">
                                                <input onChange={handleOnChange} type="checkbox"  value="MNH" name="MNH" id=""/>
                                                <label className='ml-1'> MNH</label>
                                            </div>
                                            <div className="col-md-4">
                                            <input onChange={handleOnChange} type="checkbox" name="MINT" value="MINT" id=""/>
                                                <label className='ml-1'> MINT</label>
                                            </div>
                                            <div className="col-md-4">
                                            <input onChange={handleOnChange} type="checkbox" name="Usado" value="Usado" id=""/>
                                                <label className='ml-1'> Usado</label>
                                            </div>
                                            <div className="col-md-4">
                                            <input onChange={handleOnChange} type="checkbox" name="sobre" value="sobre" id=""/>
                                                <label className='ml-1'> En sobre</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6 style={{color:'#ada9a9', fontFamily:"Bien"}} htmlFor="exampleFormControlInput1">Origen</h6>
                                            <input onChange={handleOnChange} type="text" className="form-control" id="exampleFormControlInput1" name="Origen" placeholder="Origen"/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h6 style={{color:'#ada9a9', fontFamily:"Bien"}} htmlFor="exampleFormControlInput1">Cuenta Con Certificado</h6>
                                        <div className="row">
                                        
                                            <div className="col-md-4">
                                                <input type="checkbox" onChange={handleOnChange} name="Si" value="Si" id=""/>
                                                <label  className='ml-1'> Si</label>
                                            </div>
                                            <div className="col-md-4">
                                            <input onChange={handleOnChange} type="checkbox" name="No" value="No" id=""/>
                                                <label className='ml-1'> No</label>
                                            </div>
                                            <div className="col-md-4">
                                            
                                            </div>
                                            <div className="col-md-4">
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                               
                                <div className="form-group">
                                    <h6 style={{color:'#ada9a9', fontFamily:"Bien"}}  htmlFor="exampleFormControlTextarea1">Descipción</h6>
                                    <textarea onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" name="Descipción" placeholder="Descipción" rows="6"></textarea>
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <p>0/5000 Caracteres</p>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{width:'80%'}}>
                        <h3 style={{fontFamily:'Bien'}}>Ingresos</h3>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                    <h6 style={{color:'#ada9a9', fontFamily:"Bien"}} htmlFor="exampleFormControlInput1">Ingresos estimados</h6>
                                    <p style={{color:'#ada9a9', fontFamily:"Bien"}}> Aquello que consideras que deberí <br/> ser el mínimo </p>
                                    <input onChange={handleOnChange} type="number" className="form-control" name="Ingresos" id="exampleFormControlInput1" placeholder="S/"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                    <h6 style={{color:'#ada9a9', fontFamily:"Bien"}} htmlFor="exampleFormControlInput1">Precio de reserva</h6>
                                    <p style={{color:'#ada9a9', fontFamily:"Bien"}}> Posible solo para lotes con ingresos estimados<br/> mayores a S/100 </p>
                                    <input type="number" onChange={handleOnChange} className="form-control" name="Precio" id="exampleFormControlInput1" placeholder="S/"/>
                                </div>
                            </div>
                        </div>
                        <h3 style={{fontFamily:'Bien'}}>Fotos</h3>
                        <p style={{color:'#ada9a9', fontFamily:"Bien"}}>Te sugerimos subir fotos con la mayir claridad posible ya que serán sometidas a un <br/> proeeso de evaluación y control de calidad</p>
                        <div className="row">
                            <div className="col-md-4" >
                                <div style={{border:'1px solid lightgray', borderRadius:'10px'}} className="d-flex justify-content-between align-items-center p-4">
                                    <InsertPhotoIcon style={{color:'#ada9a9'}} fontSize="large" />
                                    <input onChange={handleFileChange} type="file" name="" style={{display:'none'}} id="customButtonFOrUpload"/>
                                    <label style={{color:'#ada9a9', fontFamily:"Bien", cursor:'pointer'}} className="text-center" htmlFor="customButtonFOrUpload"> select <br/> front photo <br/> <BackupOutlinedIcon/> </label>
                                </div>
                            </div>
                            <div className="col-md-4" >
                            <div style={{border:'1px solid lightgray', borderRadius:'10px'}} className="d-flex justify-content-between align-items-center p-4">
                                    <InsertPhotoIcon style={{color:'#ada9a9'}} fontSize="large" />
                                    <input onChange={handleFileChange} type="file" name="" style={{display:'none'}} id="customButtonFOrUpload"/>
                                    <label style={{color:'#ada9a9', fontFamily:"Bien", cursor:'pointer'}} className="text-center" htmlFor="customButtonFOrUpload"> select <br/> front photo <br/> <BackupOutlinedIcon/> </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div style={{border:'1px solid lightgray', borderRadius:'10px'}} className="d-flex justify-content-between align-items-center p-4">
                                    <InsertPhotoIcon style={{color:'#ada9a9'}} fontSize="large" />
                                    <input onChange={handleFileChange} type="file" name="" style={{display:'none'}} id="customButtonFOrUpload"/>
                                    <label style={{color:'#ada9a9', fontFamily:"Bien", cursor:'pointer'}} className="text-center" htmlFor="customButtonFOrUpload"> select <br/> front photo <br/> <BackupOutlinedIcon/> </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12 d-flex justify-content-end">
                                <div>
                                 <h5 style={{color:'#212529'}}>Origen:{subastasDetails.Origen}</h5>
                                 <h5 style={{color:'#212529'}}>Estado:{subastasDetails.MNH},{subastasDetails.MINT },{subastasDetails.Usado},{subastasDetails.sobre}</h5>
                                 <h5 style={{color:'#212529'}}>Cuenta con certificado:{subastasDetails.Si} o {subastasDetails.No}</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                </div>
                    <div className="row mb-5">
                        <div className="col-md-12 d-flex justify-content-center">
                            <div style={{width:'500px'}}>
                            <button type="submit" className="btn btn-dark form-control">Solieitar revisión</button>
                            </div>
                        </div>
                    </div>
                </form>
            <Footer/>
        </div>
    );
};

export default SellerPanel;