import React from 'react';
import { css } from 'glamor';

const NotFound = () => {
    return (
        <div className="row text-center align-items-center h-100">
            <div className={`col ${styles.text}`}>
                Lo sentimos la página que buscas no existe. :(
            </div>
        </div>
    );
}

const styles = {
    text: css({
        fontSize: 23,
        fontStyle: "italic",
        marginTop: 50
    })
};

export default NotFound;