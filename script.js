function add(n1,n2){
  return Number(n1)+Number(n2);
}

function subtract(n1,n2){
  return Number(n1)-Number(n2);
}

function multiply(n1,n2){
  return Number(n1)*Number(n2);
}

function divide(n1,n2){
  return Number(n1)/Number(n2);
}

function operate(n1,operator,n2){
  switch(operator){
    case "+":
    return  add(n1,n2);
        
    case "-":
    return  subtract(n1,n2);
        
    case "*":
    return  multiply(n1,n2);
        
    case "/":
    return divide(n1,n2);
          
  }
}

function createNumberButtons(){
  numbersContainer=document.getElementById("numbers-container");
  for (let i= 1; i<=10; i++){
    
    const button = document.createElement("button");
    button.setAttribute("class",`number-button`);
      
    if(i!==10){
      button.innerText=`${i}`;
      button.addEventListener("click", modifyObj );  
    // button.onclick = function(){display.innerText=display.innerText+i};
    }else{
      button.innerText="0";
    //button.onclick = function(){display.innerText=display.innerText+"0"};}
      button.addEventListener("click", modifyObj );
    }
    numbersContainer.appendChild(button);
  }
  
}


function createOperationsButtons(){
  operationsContainer=document.getElementById("operations-container");
  let arr=["+","-","*","/"];
  
  arr.forEach (operator=> {
    
    const button = document.createElement("button");
    button.setAttribute("class",`operator-button`);
    
    button.innerText=operator;
    button.addEventListener("click", modifyObj );
   
    operationsContainer.appendChild(button);

  })
}

let resultSwitch = 0;

obj={n1: "",op:"",n2:""};
function modifyObj(input){
    

    if (!isNaN( input.target.innerText)){
        if(obj.op){
            obj.n2+=input.target.innerText;
            
        }else if (!obj.op){
          if(resultSwitch){
          obj.n1=input.target.innerText;
          resultSwitch=0;
          }else{obj.n1+=input.target.innerText;}
           
        }
    }
    
    console.log (input.target.innerText);


    if(isNaN( input.target.innerText)){
      console.log (input.target.innerText);
      if(! obj.n2){obj.op=input.target.innerText;}
      else if (obj.n2){
        console.log (input.target.innerText);
        obj.n1= operate(obj.n1, obj.op, obj.n2);
        obj.op=input.target.innerText;
        obj.n2="";}
    }
    display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
}

let resultV ;


function result(){
    if(obj.n1 && obj.op  && obj.n2){
        obj.n1=operate(obj.n1, obj.op, obj.n2); 
        obj.op="";
        obj.n2="";
        display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
        resultSwitch = 1;
        //add event lisnter that checjs if obj[0].n1 changes if it does obj[0] = "", then disable the event;
        
    }else{return};
}


createNumberButtons();
createOperationsButtons();


toDisplay = `${obj.n1} ${obj.op} ${obj.n2}`;
display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;