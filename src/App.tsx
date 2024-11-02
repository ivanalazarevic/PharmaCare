import './App.scss';
import {AppSidebar} from "@/components/sidebar/app-sidebar.tsx";
import {Route, Router, Routes} from "react-router-dom";
import Products from "@/pages/products/products";
import Statistics from "@/pages/statistics/statistics";
import AboutUs from "@/pages/about-us/about-us";
import {Fragment} from "react";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import Layout from "@/layout";
import CreateUpdateProduct from "@/pages/create-update-product/create-update-product";
import {ROUTES} from "@/core/consts/routes";

function App() {

  return (
        <Fragment>
            <Layout>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Products/>}/>
                    <Route path={ROUTES.CREATE_PRODUCT} element={<CreateUpdateProduct/>}/>
                    <Route path={ROUTES.UPDATE_PRODUCT} element={<CreateUpdateProduct/>}/>
                    <Route path={ROUTES.STATS} element={<Statistics/>}/>
                    <Route path={ROUTES.ABOUT} element={<AboutUs/>}/>
                </Routes>
            </Layout>
        </Fragment>
  );
}

export default App;
