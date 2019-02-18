import React from 'react';
import {css} from 'glamor';
import {LOGO_URL} from '../constants';

const Logo = () => {
    return (
        <img className={styles.logo} alt="" src={LOGO_URL} />
    );
}

const styles = {
    logo : css({
        width: 100,
        height: 100,
        borderRadius: 100
    })
};

export default Logo;