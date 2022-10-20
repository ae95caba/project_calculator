function add(n1,n2){
  let answer = Number(n1)+Number(n2);
  return Math.round(answer*10000)/10000;
  
}

function subtract(n1,n2){
  let answer = Number(n1)-Number(n2);
  return Math.round(answer*10000)/10000;
}

function multiply(n1,n2){
  let answer = Number(n1)*Number(n2);
  return Math.round(answer*10000)/10000;
}

var infinitySwitch=0;

function divide(n1,n2){
  let answer = Number(n1)/Number(n2);
  if (answer != Infinity){
    
    return Math.round(answer*10000)/10000;
  }else {
    infinitySwitch=1;
    return "ERROR cant divide by 0";};
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
  for (let i= 1; i<=11; i++){
    
    const button = document.createElement("button");
    button.setAttribute("class",`number-button`);
      
    if(i<10){
      button.innerText=`${i}`;
      button.addEventListener("click", addNumber );  
    // button.onclick = function(){display.innerText=display.innerText+i};
    }else if(i== 11){
      button.innerText=".";
      button.addEventListener("click", addDot );
    }else if(i==10){
      button.innerText="0";
    //button.onclick = function(){display.innerText=display.innerText+"0"};}
      button.addEventListener("click", addNumber );
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
    button.addEventListener("click", addOperator );
   
    operationsContainer.appendChild(button);

  })
}

let resultSwitch = 0;

obj={n1:"0",op:"",n2:""};

function addNumber(input){
  if(infinitySwitch){infinitySwitch=0}

  if(obj.op){
    if(obj.n2 !== "0" || obj.n2 !==""){
      obj.n2+=input.target.innerText;
    }else if(obj.n2 === "0" || obj.n2 ===""){
      obj.n2=input.target.innerText;
    }
      
  }else if (!obj.op){
    if(resultSwitch){
      obj.n1=input.target.innerText;
      resultSwitch=0;
    }else{
      if(obj.n1 !== "0"&& obj.n1 !==""){
        obj.n1+=input.target.innerText;}
      else if (obj.n1 === "0" || obj.n1 === ""){
        //alert("n1 tiene 0");
        obj.n1 = input.target.innerText;}
    }
  };

  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;

};
  
function addOperator(input){

  if(infinitySwitch){return;}
  
  if(resultSwitch){ resultSwitch=0};
      
  if(! obj.n2){obj.op=input.target.innerText;}
  else if (obj.n2){
    
    obj.n1= operate(obj.n1, obj.op, obj.n2);
    obj.op=input.target.innerText;
    obj.n2="";}


  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
};



function addDot(input){
  
  if (resultSwitch){
    obj.n1="0.";
    resultSwitch = 0;
  }

  if(obj.op){
    if(!obj.n2){obj.n2= "0."; }
    else if (obj.n2.search(/\./)<0){
     // alert("no hay punto en n2");
      obj.n2+=input.target.innerText;
    }else if(obj.n2.search(/\./)>=0){
      //alert("hay punto en n2");
      };
  }


  if(!obj.op){
    if((obj.n1).search(/\./) == -1){
     // alert("no hay punto en n1");
      obj.n1+=input.target.innerText;
    }else if(obj.n1 >0){
      
      //alert("hay punto en n1");
      
    };

  }

  

  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
}







//whe the user presses =, the obj.n1 becomes the result of the previous operation
function result(){
   
    if(obj.n1 && obj.op  && obj.n2){
        obj.n1=operate(obj.n1, obj.op, obj.n2); 
        obj.op="";
        obj.n2="";
        display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
        resultSwitch = 1;
        
        
    }else{return};
}



function clear2(){
  
  obj.n1="0";
  obj.op="";
  obj.n2="";
  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
}

createNumberButtons();
createOperationsButtons();


toDisplay = `${obj.n1} ${obj.op} ${obj.n2}`;
display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;

