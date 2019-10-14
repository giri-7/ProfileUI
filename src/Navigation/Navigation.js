import React, {Component} from 'react';
import {Route} from 'react-router';
import {BrowserRouter,Switch,HashRouter} from 'react-router-dom';
import App from './../App.js';
import editProfile from './../editProfile';


export default class Navigation  extends Component{
	render(){
		return(
                <BrowserRouter>
                    <Switch>
                          <Route exact path='/' component={App}/>
                          <Route exact path='/App' component={App}/>
                          <Route exact path='/editProfile' component={editProfile}/>

                     </Switch>
                </BrowserRouter>     
			);
	}
}
