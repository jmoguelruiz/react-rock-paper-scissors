import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { NotFound, GuessLayoutRoute, MainLayoutRoute } from './components';
import login from '../login';
import { css } from 'glamor';

const Register = () => <div>Register</div>;
const Game = () => <div>Game</div>;

class Container extends Component {
    render() {

        const {history} = this.props;

        return (
            <Router history={history}>
                <div className='container h-100'>
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
                            component={Game}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    };
};

const styles = {
 
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    };
};


export default withRouter(connect(null, mapDispatchToProps)(Container));


