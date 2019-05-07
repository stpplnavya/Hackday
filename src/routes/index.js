import React from 'react';
import { Route, Switch } from 'react-router';
import myApp from '../Initial';
import Register from '../Register';
import SimpleCard from '../Home'
const routes= ({history}) => (
    <Switch>
        <Route
            exact path = '/'
            component = { <myApp history={ history }/> }
        />
        <Route
            exact path = '/register'
            component = { Register }
        />
        <Route
            exact path = '/home'
            component = { SimpleCard }
        />
    </Switch>
    
)

export default routes;