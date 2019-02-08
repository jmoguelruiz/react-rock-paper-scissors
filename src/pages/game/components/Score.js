import React from 'react';
import {css} from 'glamor';
import Weapon from './Weapon';

const Score = ({participant, points, type}) => {
    return (
        <div className={`row align-items-center ${styles.container}`}>
            <div className="col text-center">
                <div className={styles.label}>
                    {participant}
                </div>
            </div>
            <div className="col ">
                <Weapon 
                    type = {type}
                />
            </div>
            <div className="col">
                <div className={styles.points}>
                    {points} PT
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: css({
        margin: "30px 0px 30px 0px"
    }),
    label : css({
        fontSize: 15,
        color: "#fff"
    }),
    points : css({
        textAlign : "center",
        margin: "0 auto",
        width : 60,
        fontSize: 15,
        border: "1px solid #fff",
        color: "#fff",
        padding: 5,
        borderRadius: 5
    })
};

export default Score;