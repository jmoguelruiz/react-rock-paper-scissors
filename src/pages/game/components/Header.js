import React from 'react';
import { css } from 'glamor';

const Header = ({onLogout}) => {
    return (
        <div className={`row ${styles.container}`}>
            <div className={`col-12 text-center`}>
                ROCK, PAPER, SCISSORS
                <div onClick={onLogout} className={styles.logout}>Cerrar Sesion</div>
            </div>
        </div>
    );
}

const styles = {
    container: css({
        backgroundColor: "#112b46",
        padding: 15,
        fontSize: 22,
        color: "#fff"
    }),
    logout:css({
        fontSize: 10,
        cursor: "pointer",
        marginRight: "15px",
    })
};

export default Header;