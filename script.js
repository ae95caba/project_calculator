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
    //creates numbers from 1 to 9  
    if(i<10){
      button.innerText=`${i}`;
      button.addEventListener("click", function(e){addNumber2(e.target.innerText);} );  
      
    // button.onclick = function(){display.innerText=display.innerText+i};
    //creates dot
    }else if(i== 11){
      button.innerText=".";
      button.addEventListener("click", function(e){addDot2(e.target.innerText);}  );
      
    //creates number 0
    }else if(i==10){
      button.innerText="0";
    //button.onclick = function(){display.innerText=display.innerText+"0"};}
      button.addEventListener("click", function(e){addNumber2(e.target.innerText);} );
    }

    numbersContainer.appendChild(button);
  }

  
}

let arr=["+","-","*","/"];
function createOperationsButtons(){
  operationsContainer=document.getElementById("operations-container");
  //let arr=["+","-","*","/"];
  
  arr.forEach (operator=> {
    
    const button = document.createElement("button");
    button.setAttribute("class",`operator-button`);
    
    button.innerText=operator;
    button.addEventListener("click", function(e){addOperator2(e.target.innerText);}  );
   
    operationsContainer.appendChild(button);

  })
}

let resultSwitch = 0;

obj={n1:"0",op:"",n2:""};
  
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

// the dot needs an indiviual functions because the ways it gets added to the display should be different
// to the way numbers and other non numbers get added.

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

//cant be called clear because if so, it wont run
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


function backspace(){
  if (obj.n2){
  obj.n2 = obj.n2.slice(0, -1);
  }else if(obj.op){
  obj.op="";
  }else if(obj.n1){
    if(obj.n1 ==="0"){return}
    else{
    console.log(!!obj.n1);
    obj.n1=obj.n1.slice(0,-1);}
  }

  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
  
}

// adding keyboard suppport

function addNumber2(input){

  console.log(input);
  
  if(infinitySwitch){infinitySwitch=0}
  
  if(resultSwitch){
    obj.n1=input;
    resultSwitch=0;
    display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
    return

  }


  if(obj.op){
    if(obj.n2 !== "0"){
      obj.n2+=input;
    }else if(obj.n2 === "0"){
     
      obj.n2 = input;
    }
      
  }else if (!obj.op){
    
      if(obj.n1 !== "0"){
        obj.n1+=input;}
      else if (obj.n1 === "0"){
        //alert("n1 tiene 0");
        obj.n1 = input;}
    
  };


  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;

};

function addDot2(){
  
  if (resultSwitch){
    obj.n1="0.";
    resultSwitch = 0;
  }

  if(obj.op){
    if(!obj.n2){obj.n2= "0."; }
    else if (obj.n2.search(/\./)<0){
     
      obj.n2+=".";
    }else if(obj.n2.search(/\./)>=0){
      
      };
  }


  if(!obj.op){
    if((obj.n1).search(/\./) == -1){
     
      obj.n1+=".";
    }else if(obj.n1 >0){
      
      
      
    };

  }

  

  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
}

function addOperator2(input){

  if(infinitySwitch){return;}
  
  if(resultSwitch){ resultSwitch=0};
      
  if(! obj.n2){obj.op=input;}
  else if (obj.n2){
    
    obj.n1= operate(obj.n1, obj.op, obj.n2);
    obj.op=input;
    obj.n2="";}


  display.innerText= `${obj.n1} ${obj.op} ${obj.n2}`;
};

window.addEventListener('keydown',function (e){
  console.log(e.key);
  let keyPressed = e.key;
  if(!isNaN(keyPressed)){
    
    addNumber2(e.key);
  }

  if(keyPressed == (".")){
    
    addDot2()
  };
  
  if(arr.includes(keyPressed)){
    addOperator2(keyPressed);
  }

  if(keyPressed == "Enter"){
    result();
  }

  if(keyPressed =="Backspace"){
    backspace();
  }

  if(keyPressed =="c"){
    clear2();
  }


} );