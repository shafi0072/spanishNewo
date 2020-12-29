import React from 'react';
import PublishIcon from '@material-ui/icons/Publish';
import imageUploadImg from '../../../Resorce/imageAvt.png'
import DashBlogTextEditor from './DashBlogTextEditor';
const DashNuevoArtículo = () => {
    return (
        <div>
            <h2 style={{fontFamily:'Bien'}}>Nueva artículo</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4 style={{fontFamily:'Bien'}} className='text-secondary mt-3'>Título de la entrada</h4>
                    <input type="text" name="" id="" className='form-control'/>
                </div>
                <div className="col-md-4">
                <h4 style={{fontFamily:'Bien'}} className='text-secondary mt-3'>Categoría</h4>
                    <select className='form-control pr-2'>
                        <option>Colecciones</option>
                    </select>
                </div>
                <div className="col-md-2">
                <h4 style={{fontFamily:'Bien'}} className='text-secondary mt-3'>Imagen</h4>
                    <div className="d-flex justify-content-start">
                            <img src={imageUploadImg} alt="" className='mr-2'/>
                            <label style={{cursor:'pointer'}} htmlFor="BlogUploadImg"><PublishIcon fontSize="large"/></label>
                            <input type="file" name="" id="BlogUploadImg" style={{display:'none'}}/>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <DashBlogTextEditor/>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="d-flex justify-content-center" style={{width:'100%'}}>
                        <div  style={{width:'20%', borderRadius:'0', border:'1px solid #2c2c2c'}} className='mr-1'><button className='form-control' style={{ fontFamily:'Bien'}}>Guardar borrador</button></div>
                        <div style={{width:'20%',  backgroundColor:'#2c2c2c',  borderRadius:'0', border:'1px solid #2c2c2c'}}><button className='form-control' style={{ backgroundColor:'#2c2c2c', border:'none', fontFamily:'Bien', color:'white'}}>Publicar</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashNuevoArtículo;