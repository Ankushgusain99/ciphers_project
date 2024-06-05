import React from 'react';

const SmoothTextInput = (props) => {  
    return (
      <textarea
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{
          backgroundColor: "transparent",
          border: "none",
          borderBottom: props.isLeft ? "5px solid green" :"5px solid yellow",
          boxShadow: props.isLeft ? "5px 2px 3px #0000ff" : "5px 2px 3px #ff0000",
          borderLeft: props.isLeft ? "" : "5px solid blue",
          outline: "none",
          height: "500px",
          width: "50%",
          fontSize: "32px",
          fontFamily: "cursive"
        }}
      />
    );
  };

export default SmoothTextInput;