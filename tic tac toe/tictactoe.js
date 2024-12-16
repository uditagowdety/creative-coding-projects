const prompt=require('prompt-sync')();

let gameBoard=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
let currentPlayer='X';
let gameActive=true;

function printBoard(){
    console.log(`
        ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
        ---------
        ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
        ---------
        ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
        `);
}

function handleMove(position){
    if(gameBoard[position]===" "){
        gameBoard[position]=currentPlayer;
    } else {
        console.log("cell already filled, choose another one.");
        return false;
    }

    if (checkWin()){
        printBoard();
        console.log(`player ${currentPlayer} wins!`);
        gameActive=false;
        return true;
    }

    if(gameBoard.every(cell=>cell!== " ")){
        printBoard();
        console.log(`draw match :P`);
        gameActive=false;
        return true;
    }

    currentPlayer=currentPlayer==="X"?"O":"X";
    return true;
}

function checkWin(){
    const conditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    return conditions.some(condition=>{
        const [a,b,c]=condition;
        return gameBoard[a]===currentPlayer&gameBoard[b]===currentPlayer&&gameBoard[c]===currentPlayer;
    });
}

while (gameActive){
    printBoard();

    const position=prompt(`player ${currentPlayer}, enter your move: `);

    if (position>=0 && position <=8){
        handleMove(parseInt(position));
    } else{
        console.log("invalid position, enter 0-8.")
    }
}