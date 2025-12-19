import { useState } from "react"

function ColoreToggle(){
    const[isRed, setIsRed]= useState(true);

    const boxStyle={
        backgroundColor: isRed ? "red" : "blue",
        color: "white",
        padding: "20px",
        marginbottom: "10px",
    };
    return(
        <div>
            <div style={boxStyle}>This div changes color</div>
        <button onClick={() => setIsRed(!isRed)}>Change Color</button>
        </div>
    );
}
export default ColoreToggle
