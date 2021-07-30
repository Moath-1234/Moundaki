import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/blocks/Footer";
import Header from "./components/blocks/Header";
import Home from "./components/pages/Home";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
