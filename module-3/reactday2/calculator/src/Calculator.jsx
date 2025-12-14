import React, { useRef, useState} from "react";

const Calculator = () => {
   const num1input = useRef()
   const num2input = useRef()
   const selectRef = useRef()

   const [state, setState] = useState(0)

  let performCalculation = () => {
    let num1 = Number(num1input.current.value);
    let num2 = Number(num2input.current.value);

    let result=0;

    if(selectRef.current.value=='add'){
        result =  num1+num2
    }
    if(selectRef.current.value=='subtract'){
        result =  num1-num2
    }
    if(selectRef.current.value=='multiply'){
       result =  num1*num2
    }

    setState(result)
  };

  return (
    <>
      <h3>res:{state}</h3>

      <input type="number" placeholder="num1" ref={num1input}/>
      <input type="number" placeholder="num2" ref={num2input}/>
      <select ref={selectRef}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <button onClick={performCalculation}>Perform Action</button>
    </>
  );
};

export default Calculator;