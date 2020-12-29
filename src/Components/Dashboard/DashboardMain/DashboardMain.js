import React from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';
import DashboardContent from './DashboardContent';
import DashBlogs from './DashBlogs';
import DashboardTiendaMain from './DashboardTiendaMain';
import Footer from '../../Footer/Footer';
const DashboardMain = () => {
    const [clickHandle, setClickHandle] = useState({
        Dashboard1:false,
        Dashboard2:true,
        Entradas1:true,
        Entradas2:false,
        Tienda1: true,
        Tienda2:false,
        Ajustes: true,
        Ajustes2:false,
    })
   const handleDashChange = () =>{
       const newClick = {...clickHandle}
       newClick.Dashboard1 = false;
       newClick.Dashboard2 = true;
       newClick.Entradas1 = true;
       newClick.Entradas2 = false;
       newClick.Tienda1 = true;
       newClick.Tienda2 = false;
       newClick.Ajustes = true;
       newClick.Ajustes2 = false;
       setClickHandle(newClick)
   }
   const handleDashChange2 = () => {
    const newClick = {...clickHandle}
       newClick.Dashboard1 = true;
       newClick.Dashboard2 = false;
       newClick.Entradas1 = true;
       newClick.Entradas2 = false;
       newClick.Tienda1 = true;
       newClick.Tienda2 = false;
       newClick.Ajustes = true;
       newClick.Ajustes2 = false;
       setClickHandle(newClick)
   }
   const handleEntraChange = () => {
    const newClick = {...clickHandle}
       newClick.Dashboard1 = true;
       newClick.Dashboard2 = false;
       newClick.Entradas1 = false;
       newClick.Entradas2 = true;
       newClick.Tienda1 = true;
       newClick.Tienda2 = false;
       newClick.Ajustes = true;
       newClick.Ajustes2 = false;
       setClickHandle(newClick)
   }
   const handleEntraChange2 = () => {
    const newClick = {...clickHandle}
       newClick.Dashboard1 = false;
       newClick.Dashboard2 = true;
       newClick.Entradas1 = true;
       newClick.Entradas2 = false;
       newClick.Tienda1 = true;
       newClick.Tienda2 = false;
       newClick.Ajustes = true;
       newClick.Ajustes2 = false;
       setClickHandle(newClick)
   }
   const handleTindaChange = () => {
    const newClick = {...clickHandle}
    newClick.Dashboard1 = true;
    newClick.Dashboard2 = false;
    newClick.Entradas1 = true;
    newClick.Entradas2 = false;
    newClick.Tienda1 = false;
    newClick.Tienda2 = true;
    newClick.Ajustes = true;
    newClick.Ajustes2 = false;
    setClickHandle(newClick)
   }
   const handleTindaChange2 = () => {
    const newClick = {...clickHandle}
    newClick.Dashboard1 = false;
    newClick.Dashboard2 = true;
    newClick.Entradas1 = true;
    newClick.Entradas2 = false;
    newClick.Tienda1 = true;
    newClick.Tienda2 = false;
    newClick.Ajustes = true;
    newClick.Ajustes2 = false;
    setClickHandle(newClick)
   }
   const handleAdjustChange = () => {
    const newClick = {...clickHandle}
    newClick.Dashboard1 = true;
    newClick.Dashboard2 = false;
    newClick.Entradas1 = true;
    newClick.Entradas2 = false;
    newClick.Tienda1 = true;
    newClick.Tienda2 = false;
    newClick.Ajustes = false;
    newClick.Ajustes2 = true;
    setClickHandle(newClick)
   }
   const handleAdjustChange2 = () => {
    const newClick = {...clickHandle}
    newClick.Dashboard1 = false;
    newClick.Dashboard2 = true;
    newClick.Entradas1 = true;
    newClick.Entradas2 = false;
    newClick.Tienda1 = true;
    newClick.Tienda2 = false;
    newClick.Ajustes = true;
    newClick.Ajustes2 = false;
    setClickHandle(newClick)
   }
    return (
        <div>
            <DashboardNavbar/>
            <div className="row">
                <div className="col-md-2 d-flex justify-content-center" style={{backgroundColor:'#2c2c2c', height:'200vh'}}>
                    <div className="mt-5">
                       {clickHandle.Dashboard1 && <h5 style={{color:'white', fontFamily:'Bien', cursor:'pointer'}} onClick={handleDashChange} className="mb-4 pl-5 pr-5 pt-1 pb-1"><DashboardIcon/> Dashboard</h5>}
                       {clickHandle.Dashboard2 && <h5 style={{color:'white', fontFamily:'Bien', cursor:'pointer',  backgroundColor:'#C6C6C6'}} onClick={handleDashChange2} className="mb-4 pl-5 pr-5 pt-1 pb-1"><DashboardIcon/> Dashboard</h5>}
                        {clickHandle.Entradas1 && <h5 style={{color:'white', fontFamily:'Bien', cursor:'pointer'}} onClick={handleEntraChange} className="mb-4 pl-5 pr-5 pt-1 pb-1"><EventAvailableIcon/> Blog</h5>}
                        {clickHandle.Entradas2 && <h5 style={{color:'white', fontFamily:'Bien', backgroundColor:'#C6C6C6', cursor:'pointer'}} onClick={handleEntraChange2} className="mb-4 pl-5 pr-5 pt-1 pb-1"><EventAvailableIcon/> Blog</h5>}
                       {clickHandle.Tienda1 && <h5 style={{color:'white', fontFamily:'Bien', cursor:'pointer'}} onClick={handleTindaChange} className="mb-4 pl-5 pr-5 pt-1 pb-1"><StoreIcon/> Tienda</h5>}
                        {clickHandle.Tienda2 && <h5 style={{color:'white', fontFamily:'Bien', backgroundColor:'#C6C6C6', cursor:'pointer'}} onClick={handleTindaChange2} className="mb-4 pl-5 pr-5 pt-1 pb-1"><StoreIcon/> Tienda</h5>}
                        {clickHandle.Ajustes && <h5 style={{color:'white', fontFamily:'Bien', cursor:'pointer'}} onClick={handleAdjustChange} className="mb-4 pl-5 pr-5 pt-1 pb-1"><SettingsIcon/> Ajustes</h5>}
                        {clickHandle.Ajustes2 && <h5  style={{color:'white', fontFamily:'Bien', backgroundColor:'#C6C6C6' , cursor:'pointer'}} onClick={handleAdjustChange2} className="mb-4 pl-5 pr-5 pt-1 pb-1"><SettingsIcon/> Ajustes</h5>}
                    </div>
                </div>
                <div className="col-md-10">
                    {clickHandle.Dashboard2 &&  <DashboardContent/>}
                    {clickHandle.Entradas2 && <DashBlogs/>}
                    {clickHandle.Tienda2 && <DashboardTiendaMain/>}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default DashboardMain;