import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DashboardTiendaProducts from './DashboardTiendaProducts';
import DashTiendaNuevoproducto from './DashTiendaNuevoproducto';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DashTiendaPedidos from './DashTiendaPedidos';
const DashboardTiendaMain = () => {
    const [tiendaProducts, setTiendaProducts] = useState([])
    const [subMenu, setSubMenu] = useState({
        Productos: true,
        Pedidos:false,
        Clientes:false,
        Cupones: false,
        isProductUpload:false
    })
    const handleOnProductos = () => {
        const newMenu = {...subMenu}
        newMenu.Productos = true
        newMenu.Pedidos = false
        newMenu.Clientes = false
        newMenu.Cupones = false
        newMenu.isProductUpload = false
        setSubMenu(newMenu);
    }
    const handleOnPedidos = () => {
        const newMenu = {...subMenu}
        newMenu.Productos = false
        newMenu.Pedidos = true
        newMenu.Clientes = false
        newMenu.Cupones = false
        newMenu.isProductUpload = false
        setSubMenu(newMenu);
    }
    const handleOnClientes = () => {
        const newMenu = {...subMenu}
        newMenu.Productos = false
        newMenu.Pedidos = false
        newMenu.Clientes = true
        newMenu.Cupones = false
        newMenu.isProductUpload = false
        setSubMenu(newMenu);
    }
    const handleOnCupones = () => {
        const newMenu = {...subMenu}
        newMenu.Productos = false
        newMenu.Pedidos = false
        newMenu.Clientes = false
        newMenu.Cupones = true
        newMenu.isProductUpload = false
        setSubMenu(newMenu);
    }
    const handleOnProductUpload = () => {
        const newMenu = {...subMenu}
        newMenu.Productos = false
        newMenu.Pedidos = false
        newMenu.Clientes = false
        newMenu.Cupones = false
        newMenu.isProductUpload = true
        setSubMenu(newMenu);
    }
    const handleBackWord = () => {
        const newMenu = {...subMenu}
        newMenu.Productos = true
        newMenu.Pedidos = false
        newMenu.Clientes = false
        newMenu.Cupones = false
        newMenu.isProductUpload = false
        setSubMenu(newMenu);
    }
    useEffect(() => {
        fetch('http://localhost:5000/tiendaProducts')
        .then(res => res.json())
        .then(data => setTiendaProducts(data))
    }, [tiendaProducts])
    return (
        <div className='container mt-5'>
            {subMenu.isProductUpload && <ArrowBackIosIcon fontSize="large" className="bg-dark text-light pl-2" style={{borderRadius:'100%', cursor:'pointer'}} onClick={handleBackWord}/>}
            <div className="row">
                <div className="col-md-3">
                    
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3 text-center" style={{borderRight:'1px solid gray', fontFamily:'Bien'}}>
                            <h5 style={subMenu.Productos && {color:'#DAB74F', cursor:'pointer'} || {color:'#5D5D5D', cursor:'pointer'}} onClick={handleOnProductos}>Productos</h5>
                        </div>
                        <div className="col-md-3 text-center" style={{borderRight:'1px solid gray', fontFamily:'Bien'}}>
                            <h5 style={subMenu.Pedidos && {color:'#DAB74F', cursor:'pointer'} || {color:'#5D5D5D', cursor:'pointer'}} onClick={handleOnPedidos}>Pedidos</h5>
                        </div>
                        <div className="col-md-3 text-center" style={{borderRight:'1px solid gray', fontFamily:'Bien'}}>
                        <h5 style={subMenu.Clientes && {color:'#DAB74F', cursor:'pointer'} || {color:'#5D5D5D', cursor:'pointer'}} onClick={handleOnClientes}>Clientes</h5>
                        </div>
                        <div className="col-md-3 text-center" style={{fontFamily:'Bien'}}>
                        <h5 style={subMenu.Cupones && {color:'#DAB74F', cursor:'pointer'} || {color:'#5D5D5D', cursor:'pointer'}} onClick={handleOnCupones}>Cupones</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>
            
            {subMenu.Productos && <div className="row mt-5">
                <div className="col-md-4">
                    <h3 style={{fontFamily:'Bien'}} className='text-secondary'>Aplicar a selección:</h3>
                    <div className="row">
                        <div className="col-md-6">
                           <div style={{fontFamily:'Bien', borderRight:'1px solid gray', marginRight:'25%'}}>
                           <h6 className='text-secondary'>Eliminar</h6>
                           </div>
                        </div>
                        <div className="col-md-6">
                        <h6 style={{fontFamily:'Bien'}} className='text-secondary'>Editar</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-2 d-flex justify-content-between align-items-center">
                    <div className='d-flex justify-content-start align-items-center'>
                        <AddCircleIcon onClick={handleOnProductUpload}  style={{fontSize:'50px', cursor:'pointer'}}/> 
                        <h5 style={{fontFamily:'Bien'}} className='ml-2'>Nuevo producto</h5>
                    </div>
                    <div style={{width:'30%'}}>
                        <h6 style={{fontFamily:'Bien'}}>Ordenar por</h6>
                        <select className='form-control'>
                            <option>Categoría</option>
                            <option value="">Nombre</option>
                            <option value="">Precio</option>
                        </select>
                    </div>
                </div>
            </div>}
           {subMenu.Productos && <div className="row bg-dark p-2 mt-3" >
                <div className="col-md-2 mt-1 text-center">
                    <h6 style={{fontFamily:'Bien'}} className='text-light'>Nombre</h6>
                </div>
                <div className="col-md-2 mt-1 text-center">
                <h6 style={{fontFamily:'Bien'}} className='text-light'>Categoría</h6>
                </div>
                <div className="col-md-4 mt-1 text-center">
                <h6 style={{fontFamily:'Bien'}} className='text-light'>Descipción</h6>
                </div>
                <div className="col-md-3 mt-1 text-center">
                <h6 style={{fontFamily:'Bien'}} className='text-light'>Precio</h6>
                </div> <div className="col-md-1 mt-1 text-center">
                <h6 style={{fontFamily:'Bien'}} className='text-light'>Imagen</h6>
                </div>
            </div>}
            {subMenu.Productos && tiendaProducts.map(date => <DashboardTiendaProducts date = {date}/>)}
            {subMenu.isProductUpload && <DashTiendaNuevoproducto/>}
            <DashTiendaPedidos/>
        </div>
    );
};

export default DashboardTiendaMain;