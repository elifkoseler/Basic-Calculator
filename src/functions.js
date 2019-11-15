//import React from 'react';
import stack from "./App.js";

  function sum(){
    let number = "";
    for(let x = 0; x < stack.length; x++){
        number = number + stack[x];
    }
    return number;
  }



export default sum;
