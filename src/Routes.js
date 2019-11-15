import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Routes/Home';
import LogIn from './Routes/LogIn';
import SignUp from './Routes/SignUp';
import FamilyTree from './Routes/FamilyTree';
import Errors from './Routes/Error';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={LogIn} exact/>
                    <Route path="/signup" component={() => <SignUp />} exact/>
                    {/* <Route path="/familytree" component={() => <FamilyTree editMode={'view'}/>} exact /> */}
                    <Route path="/familytree/edit" component={() => <FamilyTree editMode={'edit'} />} exact/>
                    <Route component={Errors} />
                </Switch>
            </BrowserRouter>
        )
    }
}