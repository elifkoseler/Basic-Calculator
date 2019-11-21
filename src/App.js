import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import func, {store} from './functions.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {render: " "}
    this.stack = [];
    this.stackOp = [];
  //  this.number1 = "";  //işlemleri ikili mantıkta yapmak için oluşturuldu. >>number1 op number2
  //  this.number2 = "";
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


 parse(number){
  //  let x = 0;
//    let y = 0;
    let i = 0;
    i = this.stack.indexOf("+");
    console.log(i);

    let split = number.replace("+"," ").replace("-"," ").replace("/"," ").replace("*"," ").split(" ");

    console.log("splitted: " + split);
    for(let x = 0; x < split.length; x++)
      console.log("x" + x + ": " + split[x]);
    var intArray = [];

    for(let x = 0; x < split.length;x++){
        intArray[x] = parseInt(split[x]);
    }
  // console.log("splittedINT: " + intArray);
   //console.log("splitted: " + split);
   //let t = intArray[0] + intArray[1];
//   console.log("t=> " +t);

    return intArray;
  }

  conc(){
    let number ="";
        for(let x = 0; x < this.stack.length; x++){
          number = number + this.stack[x];
        }
      return number;
    }

      store(){
        let number = this.conc();
        console.log("the number " + number);
      //  console.log("the number2 " + this.number2);
        let array = this.parse(number);
        let res = this.operation(array);

          switch (this.state.render) {

            case "1": this.stack.push(this.state.render);return <div id ="number"> 1 </div>
            case "2": this.stack.push((this.state.render));return <div id ="number"> 2 </div>
            case "3": this.stack.push(this.state.render);return <div id ="number"> 3 </div>
            case "4": this.stack.push((this.state.render));return <div id ="number"> 4 </div>
            case "5": this.stack.push((this.state.render));return <div id ="number"> 5 </div>
            case "6": this.stack.push((this.state.render));return <div id ="number"> 6 </div>
            case "7": this.stack.push(this.state.render);return <div id ="number"> 7 </div>
            case "8": this.stack.push((this.state.render));return <div id ="number"> 8 </div>
            case "9": this.stack.push((this.state.render)); return <div id ="number"> 9 </div>
            case "0": this.stack.push((this.state.render));return <div id ="number"> 0 </div>
            case "=": return <div id ="result"> {res} </div>

            case "C": this.stack.pop(); return <div id ="result"> popped! </div>

            case "AC":
              while(this.stack.length > 0){
                this.stack.pop();
              }
              while(this.stackOp.length > 0){
                this.stackOp.pop();
              }
              this.number1 = "";
              this.number2 = "";

              return <div id ="result"> all clear! </div>

            case "+":
              this.stackOp.push((this.state.render));
              this.stack.push((this.state.render));
              return <div> + </div>
            case "-":
              this.stackOp.push((this.state.render));
              this.stack.push((this.state.render));
              return <div> - </div>
            case "*":
              this.stackOp.push((this.state.render));
              this.stack.push((this.state.render));
              return <div> * </div>
            case "/":
              this.stackOp.push((this.state.render));
              this.stack.push((this.state.render));
              return <div> / </div>
            case "(":
              this.stackOp.push((this.state.render));
              this.stack.push((this.state.render));
              return <div> ( </div>
            case ")":
              this.stackOp.push((this.state.render));
              this.stack.push((this.state.render));
              return <div> ) </div>

            default:
              console.log(this.stack);
              console.log(this.stackOp);
              //console.log("length: " + this.stack.length);

              for(let x = 0; x < this.stack.length; x++){
                console.log("digit" + x + ": " +  this.stack[x]);
              }



              //let n = parseInt(number);
              //digit1 = parseInt(digit1);
            // console.log(n);
              //let res = n+2;
            //  console.log(res);
              //console.log(parseInt(number));


          }

        }
  operation(array){
    let res = 0;
    for(let x = 0; x < this.stackOp.length; x++){
      switch (this.stackOp[x]) {
        case "+":
          res = array[0] + array[1];
          //return <div> res </div>
          break;
        case "-":
          res = array[0] - array[1];
          break;
        case "*":
          res = array[0] * array[1];
          break;
        case "/":
          res = array[0] - array[1];
          break;

        default:
        console.log("arrayOp bos");
        break;

      }
      console.log("RESULT=> " + res);
    }
    return <div id ="result"> Result: {res} </div>;

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
