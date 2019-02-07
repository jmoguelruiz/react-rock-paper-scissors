import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { NotFound } from './components';

const Page1 = () => <div>Page 1</div>;
const Page2 = () => <div>Page 2</div>;
const Page3 = () => <div>Page 3</div>;

class Container extends Component {
    render() {

        const {history} = this.props;

        return (
            <Router history={history}>
                <div className="container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Page1}
                        />
                        <Route
                            exact
                            path="/page2"
                            component={Page2}
                        />
                        <Route
                            exact
                            path="/page3"
                            component={Page3}
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


