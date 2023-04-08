
import React from 'react'
import '../styles/App.css';
import { useState } from 'react';

let currShape = "square";

const App = () => {
  let [shapeArr, setShapeArr] = useState([]);
  const selectChange = (e)=>{
    currShape = e.target.value;
  }
  const buttonClicked = ()=>{
    setShapeArr([...shapeArr, currShape])
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={selectChange}>
          <option value={"square"}>Square</option>
          <option value={"circle"}>Circle</option>
        </select>
        <button onClick={buttonClicked}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {
          shapeArr.map((element, index)=>(
            <div key={index} className={element}>{index}</div>
          ))
        }
      </div>
    </div>
  )
}


export default App;
