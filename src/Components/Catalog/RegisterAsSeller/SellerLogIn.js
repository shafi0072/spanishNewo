
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {userContext} from '../../../App';
const SellerLogIn = () => {
      const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);
    const [userInfo, setUserInfo] = useContext(userContext);
    const handleLogInRelode = () => {
        const newBuyer = {
            ...userInfo
        }
        newBuyer.isSellerNeedSignUp = true;
        newBuyer.isSellerLogin = false;
        setUserInfo(newBuyer);
    }
    return (
        <div className="mt-5 formDiv mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                    type="password"
                    name="Pass"
                    class="form-control"
                    ref={register}
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
                        onClick={handleLogInRelode}
                        style={{
                            fontFamily: 'Bien',
                            textDecoration: 'underLine',
                            color: 'black',
                            cursor: 'pointer'
                        }}
                        className="text-dark text-end">Crear mi cuenta</h5>
                </div>
            </div>
        </form>
    </div>
    );
};

export default SellerLogIn;