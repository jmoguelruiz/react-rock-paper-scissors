import React from 'react';
import {css} from 'glamor';

const Weapon = ({classIcon}) => {
    return (
        <div className={`text-center ${styles.weapon}`}>
            <span className={`${classIcon} ${styles.icon}`} />
        </div>
    );
}

const styles = {
    weapon : css({
        margin: '0 auto',
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: "100%",
        paddingTop: 25,
        cursor: 'pointer'
    }),
    icon: css({
        color: "#476b96",
        fontSize: 50
    })
}

export default Weapon;