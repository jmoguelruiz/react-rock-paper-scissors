import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Header, Weapons, Board } from './components';
import actions from './actions';
import * as selectors from './selectors';

class Container extends Component {
    render() {

        const {
            mode,
            answerPlayer,
            answerComputer,
            scorePlayer,
            scoreComputer,
            fireWeapon
        } = this.props;

        return (
            <div>
                <Header />
                <Board 
                    mode = {mode}
                    answerPlayer = {answerPlayer}
                    answerComputer = {answerComputer}
                    scorePlayer = {scorePlayer}
                    scoreComputer = {scoreComputer}
                    
                />
                <Weapons 
                    fireWeapon = {fireWeapon}
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    mode : selectors.getMode,
    answerPlayer: selectors.getAnswerPlayer,
    answerComputer: selectors.getAnswerComputer,
    scorePlayer: selectors.getScorePlayer,
    scoreComputer: selectors.getScoreComputer
});

const mapDispatchToProps = (dispatch) => {
    return {
        fireWeapon : (type) => dispatch(actions.fireWeapon(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
