import React from 'react';
import { css } from 'glamor';

const Header = () => {
    return (
        <div className={`row ${styles.container}`}>
            <div className={`col-12 text-center`}>
                ROCK, PAPER, SCISSORS
            </div>
        </div>
    );
}

const styles = {
    container: css({
        backgroundColor: "#112b46",
        padding: 15,
        fontSize: 15,
        color: "#fff"
    })
};

export default Header;