import React from 'react';
import {MODE_PLAYER_COMPUTER } from '../constants';
import {css} from 'glamor';

const Mode = ({changeMode, mode, hideButton, infoText}) => {
    return (
        <div className={`row ${styles.container}`}>
            <div className="col text-center">
                <div className={styles.title}>
                    {mode === MODE_PLAYER_COMPUTER ? 'PLAYER VS COMPUTER' : 'PLAYER VS PLAYER'}
                </div>
                {
                    hideButton ? '' : <button className={styles.button} onClick={changeMode}>CHANGE MODE</button>
                }
                {infoText}
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