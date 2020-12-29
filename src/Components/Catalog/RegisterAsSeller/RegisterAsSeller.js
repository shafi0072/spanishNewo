import React, {useState, useContext} from 'react';


import {useForm} from "react-hook-form";
import {Input} from '@material-ui/core';

import { userContext } from '../../../App';
import SellerLogIn from './SellerLogIn';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const RegisterAsSeller = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);
  const [userInfo, setUserInfo] = useContext(userContext);
  const handleLogInRelode = () => {
      const newBuyer = {...userInfo}
      newBuyer.isSellerNeedSignUp = false;
      newBuyer.isSellerLogin = true;
      setUserInfo(newBuyer);
  }
    return (
        <div>
            <Navbar/>
            <div className="">
                <div className="row">
                    <div className="col-md-6 pl-5 mt-5 container">
                        <div className="d-flex justify-content-center">
                        <div className="FormInfoStatus">
                        <h1
                        style={{
                            fontFamily: 'Bien'
                        }}>Regíastrate ahora mismo</h1>
                    <h3
                        style={{
                            fontFamily: 'Bien'
                        }}
                        className='mt-3'>Para llegar a miles de compradores con la misma pasión que tu.</h3>
                    <h5
                        style={{
                            fontFamily: 'Bien'
                        }}
                        className="text-secondary mt-5">Recuerda que al crear tu cuenta loss
                        <span
                            style={{
                                textDecoration: 'underLine',
                                color: 'black'
                            }}>
                            Términos de uso</span>
                        y la
                        <span
                            style={{
                                textDecoration: 'underLine',
                                color: 'black'
                            }}>política de privacidad</span>
                        de Filatelia Peruana.</h5>
                        </div>
                        </div>
                       <div className="RegisterInfo d-flex justify-content-center">
                       {userInfo.isSellerNeedSignUp&&<div className="mt-5 formDiv">
                       <form onSubmit={handleSubmit(onSubmit)}>
                       <div class="form-group">
                               <label for="exampleInputEmail1">Nombre de pila</label>
                               <input
                                   type="text"
                                   class="form-control"
                                   ref={register}
                                   name="FirstName"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Nombre de pila"/>
                               
                           </div>
                           <div class="form-group">
                               <label for="exampleInputEmail1">Apellido</label>
                               <input
                                   type="text"
                                   class="form-control"
                                   ref={register}
                                   name="LastName"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Apellido"/>
                             
                           </div>
                           <div class="form-group">
                               <label for="exampleInputEmail1">Correo electrónico</label>
                               <input
                                   type="email"
                                   class="form-control"
                                   ref={register}
                                   name="Email"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Correo electrónico"/>
                           </div>
                           <div class="form-group">
                               <label for="exampleInputEmail1">Número de teléfono</label>
                               <input
                                   type="number"
                                   class="form-control"
                                   ref={register}
                                   name="Email"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Número de teléfono"/>
                              
                           </div>
                           <div class="form-group">
                               <label for="exampleInputEmail1">Correo electrónico</label>
                               <input
                                   type="email"
                                   class="form-control"
                                   ref={register}
                                   name="Email"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Correo electrónico"/>
                              
                           </div>
                           <div class="form-group">
                               <label for="exampleInputEmail1">Habla a</label>
                               <input
                                   type="email"
                                   class="form-control"
                                   ref={register}
                                   name="Email"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Habla a"/>
                              
                           </div>
                           <div class="form-group">
                               <label for="exampleInputEmail1">ciudad</label>
                               <input
                                   type="email"
                                   class="form-control"
                                   ref={register}
                                   name="Email"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="ciudad"/>
                              
                           </div>
                           <div class="form-group">
                           <label for="exampleInputEmail1">país</label>
                           <input
                               type="email"
                               class="form-control"
                               ref={register}
                               name="Email"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="país"/>
                          
                       </div>
                           <div class="form-group">
                               <label for="exampleInputPassword1">Contraseña</label>
                               <input
                                   type="password"
                                   name="Pass"
                                   class="form-control"
                                   ref={register}
                                   id="exampleInputPassword1"
                                   placeholder="Contraseña"/>
                           </div>
                           <div class="form-group">
                               <label for="exampleInputPassword1">Confirmar Contraseña</label>
                               <input
                                   type="password"
                                   class="form-control"
                                   name="ConfirmPass"
                                   ref={register}
                                   id="exampleInputPassword1"
                                   placeholder="Confirmar Contraseña"/>
                           </div>
                           <div className="row">
                               <div className="col-md-6">
                                   <button
                                       type="submit"
                                       class="btn btn-dark form-control"
                                       
                                       style={{
                                           fontFamily: 'Bien'
                                       }}>Crear mi cuenta</button>
                               </div>
                               <div className="col-md-6 text-center">
                                   <h5
                                       style={{
                                           fontFamily: 'Bien'
                                       }}
                                       className="text-secondary">¿Ya tienes cuenta?</h5>
                                   <h5 onClick={handleLogInRelode}
                                       style={{
                                           fontFamily: 'Bien',
                                           textDecoration: 'underLine',
                                           color: 'black',
                                           cursor: 'pointer'
                                       }}
                                       className="text-dark text-end">Inicia sesión</h5>
                               </div>
                           </div>
                       </form>
                   </div>}
                   {userInfo.isSellerLogin&&<SellerLogIn/>}
                       </div>
                    </div>
                    <div className="col-md-6 SideOfReister d-flex align-items-end">
                        <div className="MainHeadingForRegistarRightSide mb-5">
                        <h1 style={{ fontFamily: 'Bien', color: 'black'}}>Llega a las personas indicadas en el momento indicado</h1>
                        <h4 style={{ fontFamily: 'Bien', color: 'black'}}>Comienza a vender hoy mismo tus
                        Colecciones en Filatelia Peruana
                        </h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default RegisterAsSeller;