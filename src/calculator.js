import React, { useState } from 'react';

function Calc() {
    const [value, setValue] = useState(0);
    const [input, setInput] = useState(0);

    const add = () => {
        setValue(value + Number(input));
    }

    const subtract = () => {
        setValue(value - Number(input));
    }

    const multiply = () => {
        setValue(value * Number(input));
    }

    const divide = () => {
        setValue(value / Number(input));
    }

    const changeInput = event => {
        setInput(event.target.value);
    }

    return (
        <div data-testid="main div">
            Calculated Value: {value}
            <br></br>
            Input Value: {input}
            <div data-testid="buttons div">
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={divide}>Divide</button>
            </div>
            <br></br>
            <div data-testid="input div">
                <input type="text" value={input} onChange={changeInput}/>
            </div>
        </div>
    )
}

export default Calc;