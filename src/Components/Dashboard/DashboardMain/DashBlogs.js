import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DashBlogFakeData from './DashBlogFakeData';
import DashNuevoArtículo from './DashNuevoArtículo';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const DashBlogs = () => {
    const [articleEditor, setArticleEditor] = useState({
        article:false,
        articleBack: true
    })
    const handleArticleChange = () => {
        const newArticle = {...articleEditor}
        newArticle.article = true
        newArticle.articleBack = false
        setArticleEditor(newArticle)
    }
    const handleBackWord = (e) => {
        const newArticle = {...articleEditor}
        newArticle.article = false
        newArticle.articleBack = true
        setArticleEditor(newArticle)
    }
    return (
        <div className='container mt-5'>
            {articleEditor.article && <ArrowBackIosIcon onClick={handleBackWord} className='bg-dark text-light pl-2' style={{borderRadius:'100%', cursor:'pointer'}} fontSize="large"/>}
            {articleEditor.articleBack && <div className="row m-1">
                <div className="col-md-4">
                    <h3 style={{fontFamily:'Bien'}} className='text-secondary'>Aplicar a selección:</h3>
                    <div className="row">
                        <div className="col-md-6">
                           <div style={{fontFamily:'Bien', borderRight:'1px solid gray', marginRight:'25%'}}>
                           <h6 className='text-secondary'>Eliminar</h6>
                           </div>
                        </div>
                        <div className="col-md-6">
                        <h6 style={{fontFamily:'Bien'}} className='text-secondary'>Clonar</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-2 d-flex justify-content-between align-items-center">
                    <div className='d-flex justify-content-start align-items-center'>
                        <AddCircleIcon onClick={handleArticleChange} style={{fontSize:'50px'}}/> 
                        <h5 style={{fontFamily:'Bien'}} className='ml-2'>Nuevo artículo</h5>
                    </div>
                    <button className="btn btn-dark">Seleccionar todo</button>
                </div>
            </div>}
            {articleEditor.articleBack &&  <div className="row bg-dark p-2 m-1" >
                <div className="col-md-6 mt-1">
                    <h6 style={{fontFamily:'Bien'}} className='text-light'>Título</h6>
                </div>
                <div className="col-md-2 mt-1">
                <h6 style={{fontFamily:'Bien'}} className='text-light'>Autor</h6>
                </div>
                <div className="col-md-2 mt-1">
                <h6 style={{fontFamily:'Bien'}} className='text-light'>Etiquetas</h6>
                </div>
                <div className="col-md-2 mt-1">
                <h6 style={{fontFamily:'Bien'}} className='text-light'>Fecha</h6>
                </div>
            </div>}
                {articleEditor.articleBack &&  <DashBlogFakeData/>}
                {articleEditor.article && <DashNuevoArtículo/>}
        </div>
    );
};

export default DashBlogs;