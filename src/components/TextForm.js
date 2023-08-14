import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    setText("You have clicked on Convert to UPPERCASE button.");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE.", "Success, ");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to lowercase.", "Success, ");
  };
  const handleClearClick = () => {
    let clear = "";
    setText(clear);
    props.showAlert("Text cleared.", "Success, ");
  };
  const handleCopyText = () => {
    try{let copyText = document.querySelector("#myBox");
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to Clipboard.", "Success, ");
  }
    catch(err){
      console.log(err);
      props.showAlert("Unable to Copy to Clipboard.", "Error, ");
    }
  };
  const handleExtraSpaces = () => {
    let extraSpaceText = text.split(/[ ]+/);
    setText(extraSpaceText.join(" "));
    props.showAlert("Extra Spaces cleared.", "Success, ");
  };
  return (
    <>
      <div className="container">
        <h3 className="mb-4">{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-warning mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-info mx-2 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2">
        <h3 className="mx-3 mt-4">Your Text Summary</h3>
        <p className="my-1 mx-4">
          {
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p className="my-1 mx-4">
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          Minutes to read.
        </p>
      </div>
    </>
  );
}
