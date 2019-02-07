import React from 'react';
import {css} from 'glamor';

const Weapon = ({classIcon}) => {
    return (
        <div className={styles.weapon}>
            <span className={`${classIcon} ${styles.icon}`} />
        </div>
    );
}

const styles = {
    weapon : css({
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: "100%",
        paddingTop: 25
    }),
    icon: css({
        color: "#476b96",
        fontSize: 50
    })
}

export default Weapon;