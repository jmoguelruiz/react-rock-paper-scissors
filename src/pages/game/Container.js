import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Header, Weapons, Board } from './components';
import actions from './actions';
import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {push} from 'connected-react-router';
import api from './api';
import * as selectors from './selectors';
import login from '../login';

class Container extends Component {

    componentDidMount(){
        const {isLogged, redirect} = this.props;
        if(!isLogged){
            redirect('/react-rock-paper-scissors/login');
        }
    }

    render() {

        const {
            mode,
            answerPlayer,
            answerComputer,
            scorePlayer,
            scoreComputer,
            fireWeapon,
            fireWeaponRemote,
            waitingResponse,
            changeMode,
            isRemote,
            playerNumber,
            answerPlayerTwo,
            scorePlayerTwo,
            winner,
            canPlayOnline,
            playersOnline,
            logout
        } = this.props;

        return (

            <div className="row h-100">
                <div className="col-12" >
                    <Header onLogout={logout}/>
                </div>
                <div className="col-12 align-content-center">
                    {
                        <Board
                            mode={mode}
                            answerPlayer={answerPlayer}
                            answerPlayerTwo={answerPlayerTwo}
                            answerComputer={answerComputer}
                            scorePlayer={scorePlayer}
                            scorePlayerTwo={scorePlayerTwo}
                            scoreComputer={scoreComputer}
                            waitingResponse={waitingResponse}
                            changeMode={changeMode}
                            isRemote={isRemote}
                            playerNumber={playerNumber}
                            winner={winner}
                            canPlayOnline={canPlayOnline}
                        />
                    }
                </div>
                <div className="col-12  align-content-end">
                    <Weapons
                        fireWeapon={mode == MODE_PLAYER_COMPUTER ? fireWeapon : fireWeaponRemote}
                        disabled={
                            mode == MODE_PLAYER_PLAYER
                                ? ((playerNumber == 0 && answerPlayer && !answerPlayerTwo)
                                    || (playerNumber == 1 && answerPlayerTwo && !answerPlayer))
                                || playersOnline < 2
                                : false
                        }
                        textInfo={mode == MODE_PLAYER_PLAYER && playersOnline < 2 ? `Porfavor espere a que algún contrincante se conecte, para poder jugar.` : ''}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    canPlayOnline: selectors.getCanPlayOnline,
    mode: selectors.getMode,
    answerPlayer: selectors.getAnswerPlayer,
    answerPlayerTwo: selectors.getAnswerPlayerTwo,
    answerComputer: selectors.getAnswerComputer,
    scorePlayer: selectors.getScorePlayer,
    scorePlayerTwo: selectors.getScorePlayerTwo,
    scoreComputer: selectors.getScoreComputer,
    waitingResponse: selectors.getWaitingResponse,
    playerNumber: selectors.getPlayerNumber,
    isRemote: selectors.getIsRemote,
    winner: selectors.getWinner,
    playersOnline: selectors.getPlayersOnline,
    isLogged : login.selectors.getIsLogged
});

const mapDispatchToProps = (dispatch) => {
    return {
        fireWeapon: (type) => dispatch(actions.fireWeapon(type)),
        changeMode: () => dispatch(actions.changeMode()),
        fireWeaponRemote: (type) => dispatch(api.serverFireWeaponRemote(type)),
        redirect: (url) => dispatch(push(url)),
        logout : () => dispatch(login.actions.logout())
    };
};

Container.propTypes = {
    /** Modo plaver vs player ó plaver vs computer. */
    mode: PropTypes.number,

    /** Respuesta del jugador 1. */
    answerPlayer: PropTypes.string,

    /** Respuesta de la computadora. */
    answerComputer: PropTypes.string,

    /** Puntaje del jugador 1. */
    scorePlayer: PropTypes.number,

    /** Puntaje de la computadora. */
    scoreComputer: PropTypes.number,

    /** Disparo */
    fireWeapon: PropTypes.string,

    /** Disparo del jugador remoto */
    fireWeaponRemote: PropTypes.string,

    /** Bandera para indicar esperando respuesta. */
    waitingResponse: PropTypes.bool,

    /** Función para cambiar el modo. */
    changeMode: PropTypes.func,

    /** Bandera para saber si el jugador es remoto. */
    isRemote: PropTypes.bool,

    /** Jugador */
    playerNumber: PropTypes.number,

    /** Respuesta del Jugador 2 */
    answerPlayerTwo: PropTypes.string,

    /** Puntaje del jugador 2 */
    scorePlayerTwo: PropTypes.number,

    /** Ganador */
    winner: PropTypes.string,

    /** Bandera para saber si puede jugar online. */
    canPlayOnline: PropTypes.bool,

    /** Numero de jugadores en linea. */
    playersOnline: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
