import React from 'react';
import { css } from 'glamor';

const InputText = ({ value, handleChange, placeholder, type, error }) => {
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <span className={styles.error}>{error && error}</span>
        </div>
        );
    }
    
const styles = {
        container : css({
            textAlign: 'left'
        }),
        input : css({
            width: "100%",
            backgroundColor: "#fff",
            height: 40,
            fontSize: 14,
            borderRadius: 0,
            padding: 5,
            marginTop : 15
        }),
        error: css({
            color: '#ED2939'
        })
    }
    
export default InputText;