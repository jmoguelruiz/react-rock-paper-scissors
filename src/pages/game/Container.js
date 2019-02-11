import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Header, Weapons, Board } from './components';
import actions from './actions';
import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import api from './api';
import * as selectors from './selectors';

class Container extends Component {
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
            playersOnline
        } = this.props;

        return (

            <div className="row h-100">
                <div className="col-12" >
                    <Header />
                </div>
                <div className="col-12 align-content-center">
                    {
                        <Board
                            mode={mode}
                            answerPlayer={answerPlayer}
                            answerPlayerTwo={answerPlayerTwo}
                            answerComputer={answerComputer}
                            scorePlayer={scorePlayer}
                            scorePlayerTwo = {scorePlayerTwo}
                            scoreComputer={scoreComputer}
                            waitingResponse={waitingResponse}
                            changeMode={changeMode}
                            isRemote={isRemote}
                            playerNumber={playerNumber}
                            winner = {winner}
                            canPlayOnline = {canPlayOnline}
                        />
                    }
                </div>
                <div className="col-12  align-content-end">
                    <Weapons
                        fireWeapon={mode == MODE_PLAYER_COMPUTER ? fireWeapon : fireWeaponRemote}
                        disabled = {
                            mode == MODE_PLAYER_PLAYER 
                                ? ((playerNumber == 0 && answerPlayer && !answerPlayerTwo)
                                   || (playerNumber == 1 && answerPlayerTwo  && !answerPlayer)) 
                                   || playersOnline < 2 
                                : false
                        }
                        textInfo = { mode == MODE_PLAYER_PLAYER && playersOnline < 2 ? `Porfavor espere a que algún contrincante se conecte, para poder jugar.` : ''}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    canPlayOnline : selectors.getCanPlayOnline,

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
    winner : selectors.getWinner,
    playersOnline : selectors.getPlayersOnline
});

const mapDispatchToProps = (dispatch) => {
    return {
        fireWeapon: (type) => dispatch(actions.fireWeapon(type)),
        changeMode: () => dispatch(actions.changeMode()),
        fireWeaponRemote: (type) => dispatch(api.serverFireWeaponRemote(type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
