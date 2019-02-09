import React from 'react';
import {MODE_PLAYER_PLAYER} from '../constants';
import {css} from 'glamor';
import Mode from './Mode';
import Score from './Score';


const Board = ({
            mode, 
            answerPlayer, 
            answerComputer, 
            scorePlayer, 
            scoreComputer, 
            waitingResponse, 
            changeMode, 
            isRemote, 
            answerPlayerTwo,
            playerNumber
    }) => {

        console.log('answerPlayer',answerPlayer);
        console.log('answerPlayerTwo',answerPlayerTwo);

    return (
        <div>
            <Mode mode={mode} changeMode={changeMode}/>
            {
                mode == MODE_PLAYER_PLAYER
                ? <Score 
                    participant = {'PLAYER' } 
                    type = {playerNumber === "1" ? answerPlayer : answerPlayerTwo }
                    points = {scoreComputer}
                />
                :  <Score 
                    participant = "COMPUTER"
                    type = {answerComputer}
                    points = {scoreComputer}
                />
            }
            <div className = {styles.title}>
                vs
            </div>
            <Score 
                participant = {'YOU'}
                type = {playerNumber === "0" ? answerPlayer : answerPlayerTwo}
                points = {scorePlayer}
            />
        </div>
    );
}

const styles = {
    title : css({
       color: "#fff",
       fontSize: 18,
       textAlign: 'center'
    })
}

export default Board;