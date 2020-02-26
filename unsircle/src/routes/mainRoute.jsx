import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from '../stores/store';
import LoginPage from '../pages/login';
import Dashboard from '../pages/dashboard';

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* PAGES ROUTING */}
                    <Route exact path='/' component={Dashboard} />  
                    <Route exact path='/login' component={LoginPage} />        
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute;