import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Weapon from './Weapon';

const Weapons = ({ fireWeapon, disabled, textInfo }) => {
    return (
        <div className={`row align-items-center justify-content-center text-center ${styles.container}`}>
            <div className={`col`}>
                <Weapon
                    type='rock'
                    onClick={() => fireWeapon('rock')}
                    disabled={disabled}
                />
            </div>
            <div className={`col`}>
                <Weapon
                    type='paper'
                    onClick={() => fireWeapon('paper')}
                    disabled={disabled}
                />
            </div>
            <div className={`col`}>
                <Weapon
                    type='scissors'
                    onClick={() => fireWeapon('scissors')}
                    disabled={disabled}
                />
            </div>
            <div className={`col-12 ${styles.text}`}>
                CHOOSE A WEAPON
            </div>
            {textInfo}
        </div>
    );
}

const styles = {
    container: css({
        marginTop: 50,
        backgroundColor: "#476b96",
        padding: "20px 10px 20px 10px",
        bottom: "0"
    }),
    text: css({
        color: "#fff",
        marginTop: 20
    })
};

Weapons.propTypes = {
    /** Que disparo realizo. */
    fireWeapon: PropTypes.string,

    /** Bandera para saber si esta desactivado. */
    disabled: PropTypes.bool,

    /** Texto */
    textInfo: PropTypes.string
}

export default Weapons;