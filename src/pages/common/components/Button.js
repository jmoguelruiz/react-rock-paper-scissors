import React from 'react';
import {css} from 'glamor';

const Button = ({text, onClick}) => {
    return (
        <button 
            type="button" 
            className={styles.button} 
            onClick={onClick}>
            { text }
        </button>
    )
}

const styles = {
    button : css({
        width: "100%",
        marginTop: 15,
        padding: 8,
        fontSize: 14,
        backgroundColor: "#112b46",
        color: "#fff",
        border: "none"
    })
}

export default Button;