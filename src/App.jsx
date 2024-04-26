import { useState } from "react";
import "./styles/App.css";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const buttonClicked = (i) => {
    console.log(i);
    const nextsquare = square.slice();

    if (square[i] || calculateWinner(lines)) {
      return;
    }

    if (xIsNext) {
      nextsquare[i] = "X";
    } else {
      nextsquare[i] = "O";
    }

    setSquare(nextsquare);
    setXIsNext(!xIsNext);
  };

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (lines) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (square[a] && square[a] == square[b] && square[a] == square[c]) {
        return square[a];
      }
    }
  };

  const winner = calculateWinner(lines);
  const draw = !square.includes(null) && !winner;

  let status;

  if (winner) {
    status = "WINNER IS : " + winner;
  } else if (draw) {
    status = "MATCH IS DRAW";
  } else {
    status = "NEXT PLAYER : " + (xIsNext ? "X" : "O");
  }

  return (
    <div id="container">
      <div id="status">{status}</div>
      <div className="row">
        <button value={square[0]} onClick={() => buttonClicked(0)}>
          {square[0]}
        </button>
        <button value={square[1]} onClick={() => buttonClicked(1)}>
          {square[1]}
        </button>
        <button value={square[2]} onClick={() => buttonClicked(2)}>
          {square[2]}
        </button>
      </div>
      <div className="row">
        <button value={square[3]} onClick={() => buttonClicked(3)}>
          {square[3]}
        </button>
        <button value={square[4]} onClick={() => buttonClicked(4)}>
          {square[4]}
        </button>
        <button value={square[5]} onClick={() => buttonClicked(5)}>
          {square[5]}
        </button>
      </div>
      <div className="row">
        <button value={square[6]} onClick={() => buttonClicked(6)}>
          {square[6]}
        </button>
        <button value={square[7]} onClick={() => buttonClicked(7)}>
          {square[7]}
        </button>
        <button value={square[8]} onClick={() => buttonClicked(8)}>
          {square[8]}
        </button>
      </div>
    </div>
  );
}

export default App;

// import './styles/App.css'

// // function Button({ value, onClick}) {
// //   return <button className="square" onClick={onClick}>{ value }</button>;
// // }
// function App() {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);
//   const buttonClicked = (i) => {
//     const nextSquares = squares.slice();
//     if (squares[i] || calculateWinner(lines)){
//       return;
//     } // In X O We cant change the value in the same square
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   const calculateWinner = (lines) => {
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

//   let winner = calculateWinner(squares);
//   const draw = !squares.includes(null) && !winner;

//   let status;

//   if (winner) {
//     status = "Winner: " + winner;
//   } else if (draw) {
//     status = "MATCH IS DRAW";
//   } else {
//     status = "NEXT PLAYER: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <div id="container">
//       <div id="status">{status}</div>
//       <div className="row">
//         <Button value={squares[0]} onClick={() => buttonClicked(0)}>
//           {squares[0]}
//         </Button>
//         <Button value={squares[1]} onClick={() => buttonClicked(1)}>
//           {squares[1]}
//         </Button>
//         <Button value={squares[2]} onClick={() => buttonClicked(2)}>
//           {squares[2]}
//         </Button>
//       </div>
//       <div className="row">
//         <Button value={squares[3]} onClick={() => buttonClicked(3)}>
//           {squares[3]}
//         </Button>
//         <Button value={squares[4]} onClick={() => buttonClicked(4)}>
//           {squares[4]}
//         </Button>
//         <Button value={squares[5]} onClick={() => buttonClicked(5)}>
//           {squares[5]}
//         </Button>
//       </div>
//       <div className="row">
//         <Button value={squares[6]} onClick={() => buttonClicked(6)}>
//           {squares[6]}
//         </Button>
//         <Button value={squares[7]} onClick={() => buttonClicked(7)}>
//           {squares[7]}
//         </Button>
//         <Button value={squares[8]} onClick={() => buttonClicked(8)}>
//           {squares[8]}
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default App
