import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="container h-100">
            {children}
        </div>
    );
}

export default MainLayout;