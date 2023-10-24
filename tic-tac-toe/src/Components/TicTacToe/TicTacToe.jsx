import React, { useRef, useState } from 'react'
import './TicTacToe.css';
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = [["","",""],["","",""],["","",""]]

export const TicTacToe = () => {

    let [ count,setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const toggle = (e,i,j) => {
        if (lock) {
            return 0;
        }
        if (data[i][j] !== ""){
            return 0;
        }
        if (count%2===0){
            e.target.innerHTML = `<img src='${cross_icon}'>`
            data[i][j] = 'x';
            setCount(++count);
        }
        else {
            e.target.innerHTML = `<img src='${circle_icon}'>`
            data[i][j] = "o";
            setCount(++count);
        }
        if(checkWin(i,j)){
            won(data[i][j])
        }
    }

    const won = (winner) => {
        setLock(true)
        if (winner === "x"){
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> Wins`
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> Wins`
        }
    }

    const reset = () => {
        data = [["","",""],["","",""],["","",""]]
        setLock(false);
        titleRef.current.innerHTML = "Tic Tac Toe Game In<span> React </span>"
        box_array.map((e)=> {
            e.current.innerHTML = "";
        })
    }

    const checkWin = (i,j) => {
        let piece = data[i][j]
        // check row
        let flag = true
        for (let col = 0; col < 3; col++) {
            flag = flag && data[i][col] === piece
        }
        if (flag) {
            return true
        }
        // check col
        flag = true
        for (let row = 0; row < 3; row++) {
            flag = flag && data[row][j] === piece
        }
        if (flag) {
            return true
        }
        
        // check diag
        const diagSet = new Set(['0,0', '0,2', '1,1', '2,0', '2,2']);
        const positionToCheck = `${i},${j}`;
        if (diagSet.has(positionToCheck)) {
            if (data[0][0] !== "" && data[0][0] === data[1][1] && data[1][1] === data[2][2]) {
                return true;
            }
            if (data[0][2] !== "" && data[0][2] === data[1][1] && data[1][1] === data[2][0]) {
                return true;
            }
        }
        return false
    }

  return (
    <div className="container">
        <h2 className="title" ref={titleRef}>Tic Tac Toe Game In<span> React </span></h2>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0,0)}}></div> 
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,0,1)}}></div> 
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,0,2)}}></div> 
            </div>
            <div className="row2">
               <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,1,0)}}></div> 
               <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,1,1)}}></div> 
               <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,1,2)}}></div> 
            </div>
            <div className="row3">
               <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,2,0)}}></div> 
               <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,2,1)}}></div> 
               <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,2,2)}}></div> 
            </div>
        </div>
        <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}
