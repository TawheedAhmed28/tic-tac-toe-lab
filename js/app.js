let board = ["", "", "", "", "", "", "", "", ""]

let currentTurn = "X"
let winner = false
let tie = false

const gameSquares = document.querySelectorAll(".sqr")
const gameMessage = document.querySelector("#message")

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]



// ------------------------------------------------------------------------------------------ //

const updateBoard = () => {
    board.forEach((cellText, i) => {
        gameSquares[i].innerText = cellText
        // console.log(cellText)
    })
}

const updateMessage = () => {
    gameMessage.innerText = ""
    if ((winner = false) && (tie = false)) {
        gameMessage.innerText = `It's Player ${currentTurn}'s turn.`
    } else if ((winner = false) && (tie = true)) {
        gameMessage.innerText = "It's a tie! Play again?"
    } else {
        gameMessage.innerText = `Player ${currentTurn} wins! Play again?`
    }
}

const render = () => {
    // console.log("hey") 
    updateBoard()
    updateMessage()
}

const placePiece = (i) => {
    board[i] = currentTurn
    updateBoard()
    // console.log(board[i])
}



const init = () => {
    // console.log("hey")
    board = ["", "", "", "", "", "", "", "", ""]
    currentTurn = "X"
    winner = false
    tie = false
    render()
}
init()

const checkForWinner = () => {
    winningCombos.forEach((winningCombo) => {
       /* if (board[winningCombo[0]] === "") {
            return
     } else*/ if ((board[winningCombo[0]] === board[winningCombo[1]]) && (board[winningCombo[0]] === board[winningCombo[2]])) {
            winner = true
            // console.log("winner found")
        }
        console.log(winner)
    })
}

const checkforTie = () => {
}

const handleClick = (event) => {
    const squareIndex = event.target.id
    if (winner === true) {
        return
    } else if ((event.target.innerText == "X") || (event.target.innerText == "O")) {
        return
    } else {
    placePiece(squareIndex)
    checkForWinner()
    }
}

// ------------------------------------------------------------------------------------------ //

gameSquares.forEach((gameSquare) => {
    gameSquare.addEventListener("click", handleClick)
})