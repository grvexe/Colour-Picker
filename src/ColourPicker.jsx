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
                <div className="colour-display" style={{backgroundColor: colour}}>
                    <p>Selected Colour: {colour}</p>
                </div>
                <label>Select a colour: </label>
                <input type="color" value={colour} onChange={colourChange}/>
            </div>
        </div>
    )
}

export default ColourPicker