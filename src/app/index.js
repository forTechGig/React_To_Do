import React from "react";
import {render} from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store, history} from "./Store";

// render((
//     <BrowserRouter>
//             <App/>
//      </BrowserRouter>
// ), document.getElementById("app"));

render((
    <Provider store={store}>
        <BrowserRouter history={history}>
             <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById("app"));