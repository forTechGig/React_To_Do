import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Others from "./Others";
import AddOn from "./AddOn";

const Body = () => 
(
    <body>
        <Switch>
            <Route exact path="/" component={Home}> </Route>
            <Route path="/addon" component={AddOn}> </Route>
            <Route path="/component" component={Others}> </Route>
        </Switch>
    </body>
)

export default Body
