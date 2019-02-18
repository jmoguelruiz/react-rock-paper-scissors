import React, { Component } from 'react';
import { Header } from '../common/components';
import { Form } from './components';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as selectors from './selectors';
import actions from './actions';

class Container extends Component{
    render () {

        const { redirect, changeField, formValues, formErrors, login } = this.props;

        return (
            <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col">
                    <Header />
                    <Form 
                        redirect = {redirect}
                        changeField = {changeField}
                        formValues = {formValues}
                        formErrors = {formErrors}
                        login = {login}
                    />
                </div>
            </div>
        );
    } 
}


const mapStateToProps = createStructuredSelector({
    formValues : selectors.getFormValues,
    formErrors: selectors.getErrors
});

const mapDispatchToProps = (dispatch) => {
    return {
       redirect : (url) => dispatch(push(url)),
       changeField : (field, value) => dispatch(actions.onChangeField(field, value)),
       login : () => dispatch(actions.login())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
