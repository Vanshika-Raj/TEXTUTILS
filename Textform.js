import React, { useState } from 'react';

export default function Textform(props) {
   
    const handlethetext = () => {
        console.log("Uppercase was clicked" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOntext = () => {
        console.log("lowercase was clicked" + Text);
        let newtext = Text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnchange = (event) => {
        console.log("on change ");
        setText(event.target.value);
    }

    const handlecleartext = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }
    
    const [Text, setText] = useState('');
    
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnchange} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} id="myArea" rows="6"></textarea>
                </div>

                <button className='btn btn-primary mx-3' onClick={handlethetext}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-3' onClick={handleOntext}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-3' onClick={handlecleartext}>Clear</button>
            </div>

            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{Text.split(" ").length} words, {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text : "Enter something in the textbox to preview it here"}</p>
            </div>
        </>
    )
}
