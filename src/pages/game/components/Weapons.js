import React from 'react';
import { css } from 'glamor';
import Weapon from './Weapon';

const Weapons = () => {
    return (
        <div className={`row text-center ${styles.container}`}>
            <div className={`col`}>
                <Weapon 
                    classIcon = 'far fa-hand-rock'
                />
            </div>
            <div className={`col`}>
                <Weapon 
                    classIcon = 'far fa-hand-paper'
                />
            </div>
            <div className={`col`}>
                <Weapon 
                    classIcon = 'far fa-hand-scissors'
                />
            </div>
        </div>
    );
}

const styles = {
    container: css({
        backgroundColor: "#476b96",
        padding : 10,
    })
};

export default Weapons;