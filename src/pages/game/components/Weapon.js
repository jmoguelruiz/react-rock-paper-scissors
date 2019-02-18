import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const Weapon = ({ type, onClick, hide, isWinner, disabled }) => {
    return (
        <div>
            {
                !type
                    ?   <div className={css(styles.result, hide ? styles.hide : {})}>
                            <span className={css(styles.icon, styles.iconQuestion)}>
                                {"?"}
                            </span>
                        </div>
                    :   <button
                            disabled={disabled}
                            className={`text-center ${css(styles.weapon, isWinner ? styles.isWinner : {}, disabled ? styles.disabled : {})}`} 
                            onClick={onClick}
                        >
                        <span className={`far fa-hand-${type} ${styles.icon}`} />
                    </button>
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
    }),
    hide: css({
        backgroundColor: "#fff",
        border: "4px solid #476b96",
        '&>span': {
            color: '#476b96 !important'
        }
    }),
    isWinner: css({
        border: "4px solid green",
        '&>span': {
            color: 'green !important'
        }
    }),
    disabled: css({
        opacity: .6
    })
}

Weapon.propTypes = {
    /** Tipo. */
    type: PropTypes.number,

    /** Evento click. */
    onClick: PropTypes.func,

    /** Bandera para ocultar. */
    hide: PropTypes.bool,

    /** Bandera para saber si es el ganador. */
    isWinner: PropTypes.bool,

    /** Bandera para desabilitar los botones. */
    disabled: PropTypes.bool
};

export default Weapon;