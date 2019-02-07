import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default MainLayout;