import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { NotFound, GuessLayoutRoute, MainLayoutRoute } from './components';
import login from '../login';
import game from '../game';
import register from '../register';

class Container extends Component {

    render() {

        const { history } = this.props;

        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <GuessLayoutRoute
                            exact
                            path="/react-rock-paper-scissors/login"
                            component={login.Container}
                        />
                        <GuessLayoutRoute
                            exact
                            path="/react-rock-paper-scissors/register"
                            component={register.Container}
                        />
                        <MainLayoutRoute
                            exact
                            path="/react-rock-paper-scissors"
                            component={game.Container}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    };
};

Container.propTypes = {
    /** Historia del browser */
    history: PropTypes.object
}

export default withRouter(connect(null, null)(Container));


