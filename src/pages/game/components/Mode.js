import React from 'react';
import {css} from 'glamor';

const Mode = () => {
    return (
        <div className={`row ${styles.container}`}>
            <div className="col text-center">
                <div className={styles.title}>PLAYER VS COMPUTER</div>
                <button className={styles.button}>CHANGE MODE</button>
            </div>
        </div>
    );
}

const styles = {
    container: css({
        margin: 30
    }),
    title : css({
        fontSize: 15,
        color: "#fff"
    }),
    button : css({
        borderRadius: 5,
        marginTop : 10
    })
}

export default Mode;