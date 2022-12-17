import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked", +text);

    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Converted to upperCase successfully" , "success")
  };

  const handleLowClick = () => {
    let newlowtext = text.toLowerCase();

    setText(newlowtext);
    props.showAlert("Converted to LowerCase successfully" , "success")

  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared successfully" , "success")

  };
  const handleOnChange = (event) => {
    console.log("ON CHANGE");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");

    text.select();

    navigator.clipboard.writeText(text.value);

    props.showAlert("Copy to clipboard successfully" , "success")

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));

    props.showAlert("Extra spaces removed successfully" , "success")

  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={ { color: props.mode==='light'?'black':'white'}}  >
        <h1> {props.heading}</h1>

        <div className="mb-3">
          <textarea  className="form-control" value={text}  onChange={handleOnChange} style={{  backgroundColor: props.mode === "light" ? "white" : "grey"  }}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1  my-1 p-1" onClick={handleUpClick}>
          {" "}
          To UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1 p-1" onClick={handleLowClick}>
          {" "}
          To LowerCase
        </button>
        <button className="btn btn-primary mx-1  my-1 p-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1  my-1 p-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1  my-1 p-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        <h2>Summary</h2>
        <p>
          {text.split("").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes to Read</p>

        <h3> Preview</h3>
        <p>{text.length>0?text:"Write something to preview"}</p>
      </div>
    </>
  );
}
