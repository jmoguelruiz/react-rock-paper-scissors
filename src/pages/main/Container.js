import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { NotFound, GuessLayoutRoute, MainLayoutRoute } from './components';
import login from '../login';
import game from '../game';

const Register = () => <div>Register</div>;

class Container extends Component {

    render() {

        const { history } = this.props;

        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <GuessLayoutRoute
                            exact
                            path="/login"
                            component={login.Container}
                        />
                        <GuessLayoutRoute
                            exact
                            path="/register"
                            component={Register}
                        />
                        <MainLayoutRoute
                            exact
                            path="/"
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


