import React from 'react';
import { css } from 'glamor';

const Header = () => {
    return (
        <div className={styles.header}>
            ROCK-PAPER-SCISSORS GAME
        </div>
    );
};

const styles = {
    header: css({
        fontSize: 30,
        color: "#fff",
        margin: 20
    })
};

export default Header;