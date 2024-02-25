import React, {useState} from 'react';

function ColourPicker(){

    const [colour, setColour] = useState("#FFFFFF");

    function colourChange(event){
        setColour(event.target.value);
    }

    return(
        <div className="container">
            <div className="wrapper">
                <h1>Colour Picker</h1>
                <p>Selected Colour: <br/>
                <span>{colour}</span></p>
                <div className="colour-display" 
                style={{backgroundColor: colour}}>
                </div>
                <label>Select a colour: </label> <br/>
                <input type="color" value={colour} onChange={colourChange}/>
            </div>
        </div>
    )
}

export default ColourPicker