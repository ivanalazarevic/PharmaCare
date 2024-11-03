import './App.scss';
import CreateProduct from "@/pages/create-product/create-product";
import  {Fragment} from "react";
import {ROUTES} from "@/core/consts/routes";
import {Route, Routes} from "react-router-dom";
import Layout from "@/layout";
import Statistics from "@/pages/statistics/statistics";
import AboutUs from "@/pages/about-us/about-us";
import Products from "@/pages/products/products";
import UpdateProduct from "@/pages/update-product/update-product";


function App() {

  return (
        <Fragment>
            <Layout>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Products/>}/>
                    <Route path={ROUTES.CREATE_PRODUCT} element={<CreateProduct/>}/>
                    <Route path={ROUTES.UPDATE_PRODUCT} element={<UpdateProduct/>}/>
                    <Route path={ROUTES.STATS} element={<Statistics/>}/>
                    <Route path={ROUTES.ABOUT} element={<AboutUs/>}/>
                </Routes>
            </Layout>
        </Fragment>
  );
}

export default App;
