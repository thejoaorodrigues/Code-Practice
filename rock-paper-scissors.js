/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    //If input is equal on both sides
    if(p1 === p2){
        //Its a draw
        return "Draw!"
    //Else if player 1 has the upper hand
    } else if   (p1 === 'rock' && p2 === 'scissors' ||
                p1 === 'scissors' && p2 === 'paper' ||
                p1 === 'paper' && p2 === 'rock'){
        //Return victory for player 1
        return "Player 1 won!"
    } else {
        //Else return victory for player 2
        return "Player 2 won!"
    }
};