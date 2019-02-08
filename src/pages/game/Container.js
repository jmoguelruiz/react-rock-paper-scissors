import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Header, Weapons, Board } from './components';
import actions from './actions';
import {MODE_PLAYER_COMPUTER} from './constants';
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
            fireWeaponPlayer,
            waitingResponse,
            changeMode
        } = this.props;

        return (

            <div className="row h-100">
                <div className="col-12" >
                    <Header />
                </div>
                <div className="col-12 align-content-center">
                    <Board
                        mode={mode}
                        answerPlayer={answerPlayer}
                        answerComputer={answerComputer}
                        scorePlayer={scorePlayer}
                        scoreComputer={scoreComputer}
                        waitingResponse = {waitingResponse}
                        changeMode = {changeMode}
                    />
                </div>
                <div className="col-12  align-content-end" >
                    <Weapons
                        fireWeapon={mode == MODE_PLAYER_COMPUTER ? fireWeapon : fireWeaponPlayer}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    mode: selectors.getMode,
    answerPlayer: selectors.getAnswerPlayer,
    answerComputer: selectors.getAnswerComputer,
    scorePlayer: selectors.getScorePlayer,
    scoreComputer: selectors.getScoreComputer,
    waitingResponse : selectors.getWaitingResponse
});

const mapDispatchToProps = (dispatch) => {
    return {
        fireWeapon: (type) => dispatch(actions.fireWeapon(type)),
        changeMode: () => dispatch(actions.changeMode()),
        fireWeaponPlayer: (type) => dispatch(api.fireWeaponPlayer(type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
