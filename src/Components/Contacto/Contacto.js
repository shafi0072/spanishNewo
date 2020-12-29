import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Contacto = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
        <Navbar/>
        <div className="">
            <div className="row ">
                <div className="col-md-6 pl-5 mt-5 container">
                    <h1
                        style={{
                            fontFamily: 'Bien'
                        }}>Contacto</h1>
                    <h3
                        style={{
                            fontFamily: 'Bien'
                        }}
                        className='mt-3'>Estamos felices de recibir tus comentarios <br/>
                        y responder a tus duda
                        </h3>
                  
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    ref={register}
                                    name="Number"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Nombre"/>
                                
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">E mail</label>
                                <input
                                    type="email"
                                    name="Email"
                                    class="form-control"
                                    ref={register}
                                    id="exampleInputPassword1"
                                    placeholder="E mail"/>
                            </div>
                            <div class="form-group">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea  ref={register} name="Coemment" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comentarios"></textarea>
                          </div>
                            <div className="row mb-5">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        class="btn btn-dark"
                                        style={{
                                            fontFamily: 'Bien',
                                            
                                        }}>Enviar mi comentario</button>
                                </div>
                               
                            </div>
                            <div className="row">
                               <div className="col-md-12 d-flex justify-content-center">
                                    <p className='text-secondary'>si lo prefieres atenderte en ventas@filateliaperuna.com y <br/>
                                    por Whats app al número +51 912 887 014
                                    </p>
                               </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 SideOfContract d-flex align-items-start">
                    <div className="MainHeadingForRegistarRightSide mb-5">
                    <h1 style={{ fontFamily: 'Bien', color: 'black'}}>Nuestra pasión es lo que <br/> impulse  </h1>
                    <h4 style={{ fontFamily: 'Bien', color: 'black'}}>El crecimiento  de nuestra comunidad. <br/>
                    Acércate y crece con nosotros
                    
                    </h4>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
};

export default Contacto;