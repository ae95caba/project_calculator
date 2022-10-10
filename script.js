function add(n1,n2){
    return n1+n2;
}

function subtract(n1,n2){
 return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    return n1/n2;
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
    }else{button.innerText="0"}
    
    numbersContainer.appendChild(button);

  }
}

createNumberButtons();
