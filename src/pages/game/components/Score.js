import React from 'react';
import {css} from 'glamor';

const Score = ({participant, points, result}) => {
    return (
        <div className={`row align-items-center ${styles.container}`}>
            <div className="col text-center">
                <div className={styles.label}>
                    {participant}
                </div>
            </div>
            <div className="col ">
                <div className={styles.result}>
                    <span className={styles.icon}>
                        {!result ? "?" : result}
                    </span>
                </div>
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
    result : css({
        margin: "0 auto",
        width : 100,
        height: 100,
        borderRadius: 100,
        textAlign: "center",
        border: "2px dashed #fff",
        padding: 25,
        fontWeight: 300
    }),
    icon : css({
        fontSize: 30,
        color: "#fff",
        marginTop: 15
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