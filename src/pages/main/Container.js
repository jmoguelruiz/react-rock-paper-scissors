import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { NotFound, GuessLayoutRoute, MainLayoutRoute } from './components';
import { subscribeToTimer } from '../../api/api';
import login from '../login';
import game from '../game';

const Register = () => <div>Register</div>;

class Container extends Component {

    render() {

        const {history} = this.props;

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

const mapDispatchToProps = (dispatch) => {
    return {
       
    };
};


export default withRouter(connect(null, mapDispatchToProps)(Container));


