import React, {useState, useContext} from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './BuyerRegister.css';
import { userContext } from '../../App';


const BuyerRegister = () => {

    const[signUpData, setSignUpData] = useState({
        email:'',
        password:''
    });


    const [userInfo, setUserInfo] = useContext(userContext);
    
    
  const handleLogInRelode = () => {
      const newBuyer = {...userInfo}
      newBuyer.isBuyerNeedSignUp = false;
      newBuyer.isBuerLogIn = true;

      setUserInfo(newBuyer);
  }

const handleSubmit =(event) => {
  fetch('http://localhost:5000/signup',{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(signUpData)
  })
  .then(res => res.json())
  .then(success => {
      if(success){
         console.log('its posted on database');
      }
  })
 
  event.preventDefault();
}

  
  const handleBlur = event => {
    let isFieldValid;
    if(event.target.name === 'email'){
      isFieldValid =/\S+@\S+\.\S+/.test(event.target.value);
      console.log(isFieldValid);
    }
    if(event.target.name === 'password'){
      const isPasswordLength = event.target.value.length > 8;
      const passwordHasNumber =  /\d{1}/.test(event.target.value)
      isFieldValid = isPasswordLength && passwordHasNumber;
      console.log(isFieldValid);
    }
    if(isFieldValid){
      const newUserInfo = {...userInfo, }
      newUserInfo[event.target.name] = event.target.value;

      const DataUser = {...signUpData}
      DataUser[event.target.name] = event.target.value;
      setUserInfo(newUserInfo);
      setSignUpData(DataUser);
      
    }
  }
 
 const handleSubmit2 = (event) => {
  fetch('http://localhost:5000/login/buyer',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(signUpData)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  event.preventDefault();
}
const handleLogInRelode2 = () => {
  const newBuyer = {
      ...userInfo
  }
  newBuyer.isBuyerNeedSignUp = true;
  newBuyer.isBuerLogIn = false;
  setUserInfo(newBuyer);
};

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
                       {userInfo.isBuyerNeedSignUp&&<div className="mt-5 formDiv">
                       <form  onSubmit={handleSubmit}>
                          
                           
                           <div class="form-group">
                               <label for="exampleInputEmail1">Correo electrónico</label>
                               <input
                                   type="email"
                                   class="form-control"
                                   onChange={handleBlur}
                                   name="email"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Correo electrónico"/>
                              
                           </div>
                           <div class="form-group">
                               <label for="exampleInputPassword1">Contraseña</label>
                               <input
                                   type="password"
                                   name="password"
                                   class="form-control"
                                   onChange={handleBlur}
                                   id="exampleInputPassword1"
                                   placeholder="Contraseña"/>
                           </div>
                           <div class="form-group">
                               <label for="exampleInputPassword1">Confirmar Contraseña</label>
                               <input
                                   type="password"
                                   class="form-control"
                                   name="ConfirmPassword"
                                   onBlur={handleBlur}
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
                              {
                                userInfo.success&&<p className='text-success text-center mt-3'>Successfully SignUped</p>
                              }
                               <p className='text-danger'>{userInfo.error}</p>
                           </div>
                       </form>
                   </div>}
                   {userInfo.isBuerLogIn&&
                    <div className="mt-5 formDiv mb-5">
                    <p>Email:{userInfo.email}</p>
                    <p>password:{userInfo.password}</p>
                        <form onSubmit={handleSubmit2}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Correo electrónico</label>
                                <input
                                    type="email"
                                    class="form-control"
                                   onBlur={handleBlur}
                                    name="email"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Correo electrónico"/>
            
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    class="form-control"
                                    onBlur={handleBlur}
                                    id="exampleInputPassword1"
                                    placeholder="Contraseña"/>
                            </div>
            
                            <div className="row">
                                <div className="col-md-6">
                                    <button
                                        type="submit"
                                        class="btn btn-dark form-control"
                                        style={{
                                            fontFamily: 'Bien'
                                        }}>Inicia sesión
                                    </button>
                                </div>
                                <div className="col-md-6 text-center">
            
                                    <h5
                                        onClick={handleLogInRelode2}
                                        style={{
                                            fontFamily: 'Bien',
                                            textDecoration: 'underLine',
                                            color: 'black',
                                            cursor: 'pointer'
                                        }}
                                        className="text-dark text-end">Crear mi cuenta</h5>
                                </div>
                            </div>
                            {userInfo.success && <p className='text-success'>User LoggedIn SuccessFully</p>}
                            <p className="text-warning">{userInfo.error}</p>
                        </form>
                    </div>}
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

export default BuyerRegister;