import React from 'react';

const LoginLayout = ({ children }) => {
    return (
        <div className="row h-100 align-items-center justify-content-center">
            <div className="col-3">
                {children}
            </div>
        </div>
    );
}

export default LoginLayout;