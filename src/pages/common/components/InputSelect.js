import React from 'react';
import {css} from 'glamor';

const InputSelect = ({ options, handleChange, value }) => {
    return (
        <select className={styles.input} onChange={handleChange} value={value}>
            {
                options.map((option, index) => {
                    return <option key={`option-select-${index}`} value={option.id}>{option.value}</option>;
                })
            }
        </select>
    );
}

const styles = {
    input : css({
        width: "100%",
        backgroundColor: "#fff",
        height: 40,
        fontSize: 14,
        borderRadius: 0,
        margin: "20px 0px 20px 0px"
    })
}

export default InputSelect;