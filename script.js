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

n=document.getElementById("numbers-container");
ns= document.createElement("button")



function createNumberButtons(){
  numbersContainer=document.getElementById("numbers-container");
  for (let i= 1; i<=10; i++){
    
    const button = document.createElement("button");
    button.setAttribute("class",`number-button`);
    
    if(i!==10){
      button.innerText=`${i}`;
      button.onclick = function(){display.innerText=display.innerText+i};
    }else{button.innerText="0";
    button.onclick = function(){display.innerText=display.innerText+"0"};}
    
    numbersContainer.appendChild(button);

  }
}

function result(){
  var arr=["+","-","*","/"];
 
  for (var i = 0; i<=arr.length; i++){
     
    if( display.innerText.includes(arr[i])){
    var [n1,n2]= (display.innerText).split(arr[i]);
    console.log(operate(n1,arr[i],n2));
      
    };
  }
}

function actAsResult(){
  console.log("actAsResult");
  if (isAlreadyAOperator()){
    console.log("actAsResult 'if is true")
    return result();
  }
}

function createOperationsButtons(){
  operationsContainer=document.getElementById("operations-container");
  let arr=["+","-","*","/"];
  
  arr.forEach (operator=> {
    
    const button = document.createElement("button");
    button.setAttribute("class",`operator-button`);
    
    button.innerText=operator;
    button.addEventListener("click", actAsResult );
    button.onclick = function(){display.innerText=display.innerText+operator};
   // button.onclick = actAsResult;
    
    operationsContainer.appendChild(button);

  })
}



createNumberButtons();
createOperationsButtons();


function isAlreadyAOperator(){
  console.log("isAlreadyAOperator");
  var arr=["+","-","*","/"];
  var rta= false;
  for (var i = 0; i<=arr.length; i++){
    if (display.innerText.includes(arr[i])){
      rta=true;
      break;
    }
  }
  return rta;
}

function 




