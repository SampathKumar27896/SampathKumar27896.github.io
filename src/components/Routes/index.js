import React from 'react';
import Home from '../Pages/Home';
import Project from '../Pages/Project';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/project/:name" render={(props) => <Project {...props}/>}/>
            </Switch>
        </Router>
    )
}
export default Routes;