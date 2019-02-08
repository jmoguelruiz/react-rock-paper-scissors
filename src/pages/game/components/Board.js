import React from 'react';
import {css} from 'glamor';
import Mode from './Mode';
import Score from './Score';


const Board = ({mode, answerPlayer, answerComputer, scorePlayer, scoreComputer}) => {
    return (
        <div>
            <Mode mode={mode} />
            <Score 
                participant = "COMPUTER"
                type = {answerComputer}
                points = {scoreComputer}
            />
            <div className = {styles.title}>
                vs
            </div>
            <Score 
                participant = "PLAYER"
                type = {answerPlayer}
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