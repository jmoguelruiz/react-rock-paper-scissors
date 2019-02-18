import React from 'react';
import PropTypes from 'prop-types';

const LoginLayout = ({ children }) => {
    return (
        <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 h-100">
                {children}
            </div>
        </div>
    );
}

LoginLayout.propTypes = {
    children : PropTypes.element
}

export default LoginLayout;