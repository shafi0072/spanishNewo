import React, { useState } from 'react';
import imgAvt from '../../../Resorce/imageAvt.png';
import PublishIcon from '@material-ui/icons/Publish';
const DashTiendaNuevoproducto = () => {
    const [tiendaProducts, setTiendaProducts] = useState({
        Productsname:"",
        Category:"",
        price:"",
        discount:"",
        Descipción:"",
        ShippingFee:""
    });
const [files, setFile] = useState([]);
const [file2, setFile2] = useState([]);
const handleOnChange = (e) => {
    const newTiendaProducts = {...tiendaProducts}
    newTiendaProducts[e.target.name] = e.target.value;
    setTiendaProducts(newTiendaProducts);
}
const handleUploadImage = (e) => {
    const newFile = [...files];
    newFile.file1 = e.target.files[0];
    setFile(newFile);
}
const handleUploadImage2 = (e) => {
    const newFile = [...file2];
    newFile.file2 = e.target.files[0];
    setFile2(newFile);
}
const handleSubmit = (e) => {
   console.log('clicked');
  const formData = new FormData()
  formData.append('File1', files.file1);
  formData.append('File2', file2.file2);
  formData.append('ProductsName', tiendaProducts.Productsname);
  formData.append('price', tiendaProducts.price);
  formData.append('discount', tiendaProducts.discount);
  formData.append('Descipción', tiendaProducts.Descipción);
  formData.append('ShippingFee', tiendaProducts.ShippingFee);
  console.log('h');
  fetch('http://localhost:5000/tienda/postProducts', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error)
  })

e.preventDefault()
}
    return (
        <form onSubmit={handleSubmit} className='row mt-5'>
            
            <div className="col-md-6">
            <h2 style={{fontFamily:'Bien'}}>Nuevo producto</h2>
                <h5 htmlFor="Productsname" style={{fontFamily:'Bien'}} className='text-secondary'>Nombre del producto</h5>
                <input onChange={handleOnChange}  type="text" name="Productsname" className='form-control' id="Productsname"/> <br/>
                <h5 htmlFor="Category" style={{fontFamily:'Bien'}} className='text-secondary'>Categoría</h5>
                <select onChange={handleOnChange} name="Category" className='form-control' id="Category">
                    <option name="Category" value="Filatelia">Filatelia</option>
                </select>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h5 style={{fontFamily:'Bien'}} className='text-secondary'>Precio</h5>
                        <input onChange={handleOnChange}  type="number" name="price" className='form-control' id="price" placeholder="S/348"/> <br/>
                    </div>
                    <div className="col-md-6">
                    <h5 style={{fontFamily:'Bien'}} className='text-secondary'>Precio con descuento</h5>
                        <input onChange={handleOnChange}  type="number" name="discount" className='form-control' id="price" placeholder="S/348"/> <br/>
                    </div>
                </div>
                <h5 htmlFor="exampleFormControlTextarea1" style={{fontFamily:'Bien'}} className='text-secondary'>Descipción</h5>
                 <textarea onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="3" name="Descipción"></textarea>
            </div>
            <div className="col-md-6">
            
            <div>
                <h5 htmlFor="Productsname" style={{fontFamily:'Bien'}} className='text-secondary mt-5'>Fotos</h5>
                
                <div className="row">
                    <div className="col-md-6">
                        <div style={{border:'1px solid lightgray'}}>
                            <div className="row p-3">
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <img src={imgAvt} style={{width:'40%'}} alt=""/>
                                </div>
                                <div className="col-md-6 text-center">
                                    <p style={{fontFamily:'Bien'}} className='text-secondary'>Selecciona tu foto</p>
                                    <label htmlFor="UploadImg1"><PublishIcon/></label>
                                    <input onChange={handleUploadImage}  type="file" id="UploadImg1" style={{display:'none'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div style={{border:'1px solid lightgray'}}>
                            <div className="row p-3">
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <img src={imgAvt} style={{width:'40%'}} alt=""/>
                                </div>
                                <div className="col-md-6 text-center">
                                    <p style={{fontFamily:'Bien'}} className='text-secondary'>Selecciona tu foto</p>
                                    <label htmlFor="UploadImg2"><PublishIcon/></label>
                                    <input onChange={handleUploadImage2}  type="file" id="UploadImg2" style={{display:'none'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 style={{fontFamily:'Bien'}} className='text-secondary mt-4'>Tarifa de envío</h5>
                <div className="row">
                    <div className="col-md-6"> 
                        <input  onChange={handleOnChange} type="text" className='form-control' name="ShippingFee" placeholder='S/340'/>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 d-flex justify-content-end alignt-items-center">
                      <div style={{width:'40%'}}>
                          <button type="submit" className="btn btn-dark form-control" style={{fontFamily:'Bien', height:'120%'}}>Agregar producto</button>
                      </div>
                    </div>
                </div>
            </div>
            </div>
        </form>
    );
};

export default DashTiendaNuevoproducto;