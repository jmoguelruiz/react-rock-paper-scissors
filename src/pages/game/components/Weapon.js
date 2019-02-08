import React from 'react';
import { css } from 'glamor';

const Weapon = ({ type, onClick }) => {
    return (
        <div>
            {
                !type
                    ? <div className={styles.result}>
                        <span className={css(styles.icon, styles.iconQuestion)}>
                            {"?"}
                        </span>
                    </div>
                    : <div className={`text-center ${styles.weapon}`}  onClick={onClick}>
                        <span className={`far fa-hand-${type} ${styles.icon}`} />
                    </div>
            }
        </div>

    );
}

const styles = {
    weapon: css({
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
    }),
    iconQuestion: css({
        color: "#fff",
        fontSize: 35
    }),
    result: css({
        margin: "0 auto",
        width: 100,
        height: 100,
        borderRadius: 100,
        textAlign: "center",
        border: "2px dashed #fff",
        padding: 20,
        fontWeight: 300,
    })
}

export default Weapon;