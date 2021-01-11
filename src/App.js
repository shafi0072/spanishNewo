import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import CatalogoMain from './Components/Catalog/CatalogMain/CatalogoMain';
import ProductsCopomponents from './Components/ProductsComponents/ProductsCopomponents';
import BuyerRegister from './Components/RegisterAsABuyer/BuyerRegister';
import ProductsSingle from './Components/Catalog/ProductsSingleDetails/ProductsSingle';
import Contacto from './Components/Contacto/Contacto';
import { createContext, useState } from 'react';
import RegisterAsSeller from './Components/Catalog/RegisterAsSeller/RegisterAsSeller';
import RegisterArea from './Components/RegisterArea/RegisterArea';
import SellerUploadArea from './Components/Seller/SellerUploadArea/SellerUploadArea';
import CatalogoOver from './Components/Catalog/CatalogoOverView/CatalogoOver';
import TiendaMain from './Components/Tienda/TiendaMain/TiendaMain';
import AdminMain from './Components/AdminPanel/AdminPanelMain/AdminMain';
import TiendaDetails from './Components/Tienda/TiendaDetails/TiendaDetails';
import SellerPanel from './Components/Auction/SellerPanel/SellerPanel';
import DashboardMain from './Components/Dashboard/DashboardMain/DashboardMain';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import SubastasProducts from './Components/Subastas/SubastasProducts/SubastasProducts';

export const userContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({
    isBuyerNeedSignUp: true,
    isBuerLogIn:false,
    isSellerNeedSignUp: true,
    isSellerLogin:false,
    isSignedIn: false,
    name: "",
    LastName:"",
    number:"",
    Habla:"",
    ciudad:"",
    país:"",
    email: "",
    password: "",
    photoURL: "",
    error: "",
    success: false,
    LoggedInUser: true,
    newUser: false
  })
  return (
    <userContext.Provider value={[userInfo, setUserInfo]}>
        <Router>
          <Switch>
            <Route exact path='/'>
               <Home/>
            </Route>
            <Route  path='/home'>
               <Home/>
            </Route>
            <Route path='/catalogo/main'>
              <CatalogoMain/>
            </Route>
            <Route path='/catalogo/ano/20-21/products'>
                  <ProductsCopomponents name="19" Catalogo="20" Catagories="Anó"/>
            </Route>
            <Route path="/register/buyer">
              <BuyerRegister/>
            </Route>
            <Route path='/products/singleProducts/Details'>
                <ProductsSingle/>
            </Route>
            <Route path='/CustomerCare/contract'>
                <Contacto/>
            </Route>
            <Route path='/register/seller'>
                <RegisterAsSeller/>
            </Route>
            <Route path="/register">
              <RegisterArea/>
            </Route>
            <Route path="/seller/upload">
              <SellerUploadArea/>
            </Route>
            <Route path='/cat/over/:id'>
              <CatalogoOver/>
            </Route>
            <PrivateRoute path='/tiendaMain'>
                <TiendaMain/>
            </PrivateRoute>
            <Route path='/adminPanel'>
              <DashboardMain/>
            </Route>
            <Route path='/tiendaDetails/:id'>
              <TiendaDetails/>
            </Route>
            <Route path='/auction/sellerPanel'>
                <SellerPanel/>
            </Route>
            <Route path="/subastas/stamp">
                <SubastasProducts/>
            </Route>
            <Route path="*">
               <NotFound/>
            </Route>
          </Switch>
        </Router>
    </userContext.Provider>
  );
}

export default App;
