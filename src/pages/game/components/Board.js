import React from 'react';
import {css} from 'glamor';
import Mode from './Mode';
import Score from './Score';


const Board = () => {
    return (
        <div>
            <Mode />
            <Score 
                participant = "COMPUTER"
                result = {0}
                points = {10}
            />
            <div class = {styles.title}>
                vs
            </div>
            <Score 
                participant = "PLAYER"
                result = {0}
                points = {10}
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