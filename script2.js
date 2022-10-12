function asdf(input){
    let obj=[{n1: undefined,operator:undefined,n2:undefined},{n1: undefined,operator:undefined,n2:undefined},{n1: undefined,operator:undefined,n2:undefined},{n1: undefined,operator:undefined,n2:undefined}];
    
    
    if (typeof(input)=="number"){
        if (! obj[0].operator){
            obj[0].n1=input;
//apartir de aca se repite
        }else if (obj[0].operator){
            obj[0].n2=input;
        }else if(obj[1].operator){
            obj[1].n2=input;
        }else if(obj[2].operator){
            obj[2].n2=input;
        }else if(obj[3].operator){
            obj[3].n2=input;
        }

    }


    if (typeof(input)!=="number"){
        if(! obj[0].n2){
            obj[0].operator=input;
//apartir de aca se repite
        }else if(obj[0].n2){
            obj[1].operator=input;
        }else if(obj[1].n2){
            obj[2].operator=input;
        }else if(obj[2].n2){
            obj[3].operator=input;
        }
    }


}