let element="025468";
let cnt=0;
function f(elem ){
    let srs="";
    for(let i=0; i<elem.length; i++){
       if(elem[i]%2==0 && elem[i+1]%2==0 )
        {
           srs+=elem[i]+"-";
        }

        else{
            srs+=elem[i];
        }  
     
   
}
return srs;
}


console.log(f(element))