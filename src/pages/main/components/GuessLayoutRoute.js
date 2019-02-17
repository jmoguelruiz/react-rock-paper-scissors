import React from 'react';
import { Route } from 'react-router-dom';
import GuessLayout from './GuessLayout';

const GuessLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <GuessLayout>
                <Component {...matchProps} />
            </GuessLayout>
        )} />
    )
}

export default GuessLayoutRoute;