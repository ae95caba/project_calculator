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

function createOperationsButtons(){
  operationsContainer=document.getElementById("operations-container");
  let arr=["+","-","*","/"];
  
  arr.forEach (operator=> {
    
    const button = document.createElement("button");
    button.setAttribute("class",`operator-button`);
    
    button.innerText=operator;
    button.onclick = function(){display.innerText=display.innerText+operator};
    operationsContainer.appendChild(button);

  })
}


createNumberButtons();
createOperationsButtons();



//display config 

//display.innerText = "123*34";

function result(){
  var arr=["+","-","*","/"];
  //var arr2 = Array.from(display.innerText);
  for (var i = 0; i<=arr.length; i++){
    var x = i;
  if( display.innerText.includes(arr[i])){
   var [n1,n2]= (display.innerText).split(arr[i]);
   console.log(operate(n1,arr[i],n2));
    
  };
  
  // console.log(`tiene a ${a}`);
  // console.log(`tiene b ${b}`);
  // console.log (`tiene arr x ${arr[x]}`);
  // console.log(`tiene x ${x}`);
  // console.log(`tiene arr ${arr}`); 

  }
}




