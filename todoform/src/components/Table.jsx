/// Div table structure for rows and column, for now 100 by 100
import { useState } from 'react';
const Table = () => {
    const [input, setInput] = useState([]);
    const handleInput = (e) => {
        setInput([...input, e.target.value])
    }
    console.log("input: ", input);
    const data = [{}, {}, {}, {}, {}, {}]
    let row = 3;
    let col = 3;


    return (
        <>
            <div>Table
                <div className="grid-container">
                    
                </div>
            </div>
        </>
    )
}

function InputGrid() {
    return (
        <div className="grid-item"
        ><input type='number'
            onChange={handleInput}
        ></input>
        </div>
    )
}

export default Table;