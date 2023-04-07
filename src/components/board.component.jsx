
import Square from "./square.component"


function checkWinner(board) {
  // Convert the one-dimensional array to a two-dimensional array
  const twoDBoard = [];
  for (let i = 0; i < 3; i++) {
    twoDBoard.push(board.slice(i * 3, i * 3 + 3));
  }

  // Check for horizontal wins
  for (let i = 0; i < 3; i++) {
    if (twoDBoard[i][0] === twoDBoard[i][1] && twoDBoard[i][1] === twoDBoard[i][2] && twoDBoard[i][0] !== " ") {
      return twoDBoard[i][0];
    }
  }

  // Check for vertical wins
  for (let j = 0; j < 3; j++) {
    if (twoDBoard[0][j] === twoDBoard[1][j] && twoDBoard[1][j] === twoDBoard[2][j] && twoDBoard[0][j] !== " ") {
      return twoDBoard[0][j];
    }
  }

  // Check for diagonal wins
  if (twoDBoard[0][0] === twoDBoard[1][1] && twoDBoard[1][1] === twoDBoard[2][2] && twoDBoard[0][0] !== " ") {
    return twoDBoard[0][0];
  }
  if (twoDBoard[0][2] === twoDBoard[1][1] && twoDBoard[1][1] === twoDBoard[2][0] && twoDBoard[0][2] !== " ") {
    return twoDBoard[0][2];
  }

  // Check for incomplete game
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (twoDBoard[i][j] === " ") {
        console.log('incomplete');
        return "Incomplete";
      }
    }
  }

  // Tie game
  return null;
}



const Board = ({xIsNext, squares, onPlay}) => {

    const handleClick = (i) => {
        if (checkWinner(squares)||squares[i]) {
            return;
        }
        
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        onPlay(nextSquares);
    }


    const winner = checkWinner(squares);

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (

        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onClickHandler={()=>handleClick(0)} />
                <Square value={squares[1]} onClickHandler={()=>handleClick(1)} />
                <Square value={squares[2]} onClickHandler={()=>handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClickHandler={()=>handleClick(3)} />
                <Square value={squares[4]} onClickHandler={()=>handleClick(4)} />
                <Square value={squares[5]} onClickHandler={()=>handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClickHandler={()=>handleClick(6)} />
                <Square value={squares[7]} onClickHandler={()=>handleClick(7)} />
                <Square value={squares[8]} onClickHandler={()=>handleClick(8)} />
            </div>
        </div>

    )
}


export default Board;