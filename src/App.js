import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import sum from './functions.js';
//import StackView from 'react-stack-view';

class App extends React.Component {
  constructor(){
    super();
    this.state = {render: " "}
    this.stack = [];
    this.stackOp = [];
    this.number1 = "";  //işlemleri ikili mantıkta yapmak için oluşturuldu. >>number1 op number2
    this.number2 = "";
  }
  handleClick(number,i){
    this.setState({render: number});

  }
  isOp(x){
    if((x === "+") || (x==="-")
      || (x==="*") || (x==="/")
      || (x===")") || (x==="("))
      return false;
    else
      return true;
  }


/*  parse(number){
    var array = [];
    array = number.split("+" || "-" || "*" ||"/");
    var intArray = [];
    for(let x = 0; x < array.length;x++){
        intArray[x] = parseInt(array[x]);
    }
   console.log("splittedINT: " + intArray);
   console.log("splitted: " + array);
    console.log("a0" +intArray[0]+intArray[1]);

    return array;
  }*/
  conc(){


  /*  if((x === "0") || (x==="1")
          || (x==="2") || (x==="3")
          || (x==="5") || (x==="4")){*/

        for(let x = 0; x < this.stack.length; x++){
          this.number1 = this.number1 + this.stack[x];
        }

    }

  operation(op,array){
    switch (op) {
      case "+":
        let res = array[0] + array[1];
        console.log("sonuc:" + res);
        break;
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;

      default:
      console.log("arrayOp bos");
      break;

    }
  }

  store(){
    //let number = this.conc();
//    let array = this.parse(number);
    //this.stack.pop();
    this.conc();
    switch (this.state.render) {

      case "1": this.stack.push(this.state.render);return <div> 1 </div>
      case "2": this.stack.push((this.state.render));return <div> 2 </div>
      case "3": this.stack.push(this.state.render);return <div> 3 </div>
      case "4": this.stack.push((this.state.render));return <div> 4 </div>
      case "5": this.stack.push((this.state.render));return <div> 5 </div>
      case "6": this.stack.push((this.state.render));return <div> 6 </div>
      case "7": this.stack.push(this.state.render);return <div> 7 </div>
      case "8": this.stack.push((this.state.render));return <div> 8 </div>
      case "9": this.stack.push((this.state.render)); return <div> 9 </div>
      case "0": this.stack.push((this.state.render));return <div> 0 </div>

      case "C": this.stack.pop(); return <div> popped! </div>

      case "AC":
        while(this.stack.length > 0){
          this.stack.pop();
        }
        while(this.stackOp.length > 0){
          this.stackOp.pop();
        }
        this.number1 = "";
        this.number2 = "";

        return <div> all clear! </div>

      case "+":
        this.stackOp.push((this.state.render));
        this.conc(false);
        //this.stack.push((this.state.render));
      //  this.operation("+",array);
        return <div> + </div>

      case "-": this.stackOp.push((this.state.render)); return <div> - </div>
      case "*": this.stackOp.push((this.state.render)); return <div> * </div>
      case "/": this.stackOp.push((this.state.render)); return <div> / </div>
      case "(": this.stackOp.push((this.state.render));return <div> ( </div>
      case ")": this.stackOp.push((this.state.render)); return <div> ) </div>

      default:
        console.log(this.stack);
        console.log(this.stackOp);
        console.log("length: " + this.stack.length);

        for(let x = 0; x < this.stack.length; x++){
          console.log("digit" + x + ": " +  this.stack[x]);
        }

        console.log("the number1 " + this.number1);
        console.log("the number2 " + this.number2);

        let n = parseInt(this.number1);
        //digit1 = parseInt(digit1);
        console.log(this.number1);
        let res = n+2;
        console.log(res);
        //console.log(parseInt(number));

    }

  }

  render(){
    return (

    <div className="main-calculator">
      <div className="operators">  <h1 id="header">Basic Calculator</h1>
          <button id="resetButton" onClick={this.handleClick.bind(this,"AC")}>AC</button>
          <button id="resetButton" onClick={this.handleClick.bind(this,"C")}>C</button>
          <button id="operatorButton"onClick={this.handleClick.bind(this,"+")}>+</button>
          <button id="operatorButton"onClick={this.handleClick.bind(this,"-")}>-</button>
          <button id="operatorButton"onClick={this.handleClick.bind(this,"*")}>x</button>
          <button id="operatorButton" onClick={this.handleClick.bind(this,"/")}>/</button><br/>

          <br/>

          <button id="button" onClick={this.handleClick.bind(this,"1")}>1</button>
          <button id="button" onClick={this.handleClick.bind(this,"2")}>2</button>
          <button id="button" onClick={this.handleClick.bind(this,"3")}>3</button>
          <br/>

          <button id="button" onClick={this.handleClick.bind(this,"4")}>4</button>
          <button id="button" onClick={this.handleClick.bind(this,"5")}>5</button>
          <button id="button" onClick={this.handleClick.bind(this,"6")}>6</button>
          <br/>


          <button id="button" onClick={this.handleClick.bind(this,"7")}>7</button>
          <button id="button" onClick={this.handleClick.bind(this,"8")}>8</button>
          <button id="button" onClick={this.handleClick.bind(this,"9")}>9</button>
          <br/>


          <button id="button" onClick={this.handleClick.bind(this,"0")}>0</button>
          <button id="button" onClick={this.handleClick.bind(this,"(")}>(</button>
          <button id="button" onClick={this.handleClick.bind(this,")")}>)</button>

      </div>
      {this.store()}


      <div className="operators">

        <br/>
          <button id="equalButton"onClick={this.handleClick.bind(this,"=")}>=</button>

      </div>
    </div>
  );
  }
}
export default App;
