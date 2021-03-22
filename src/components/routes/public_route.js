import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../App';

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    );
};

export default PublicRoute;