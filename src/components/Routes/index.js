import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartMenu from '../StartMenu';
import Education from '../Pages/Education';
import Data from '../../Data/portfolio';
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><StartMenu/></Route>
                <Route exact path="/education"><Education data = {Data["education"]}/></Route>
            </Switch>
        </Router>
    )
}
export default Routes;