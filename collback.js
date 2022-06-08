let arr = [1, 2, 3, 4, 5, 6, 7];

//our code 
////////////////////////////////////////////////////////////////////// ///map 
// function ownMap(arr, callback){
//     let newArr=[]

//     for(let i=0; i<arr.length; i++){
//         newArr.push(callback(arr[i], i , arr))
//     }
//     return newArr
// }

//our code 


// let l = ownMap(arr, (elem)=>{
//     return elem * elem;
// })

// console.log(l);

// ///////////////////////////////////////////////////////////////////////join
// function ownJoin(arr, separator=","){
//     let str=""
//     for(let i=0; i<arr.length;i++){
//         if(i==arr.length-1){ str+=arr[i]; }
//         else {str+=arr[i]+ separator;}
//     }
//     return str;
// }

     
// console.log(ownJoin(arr))



let element="1-234-5-6-789";
let cnt=0;
function ownSplit(elem, separator="", num=0){
    let newArr=[];
    let isi="";
    for(let i=0; i<elem.length; i++){
        if(elem[i]!==separator && elem[i+1]===separator){
             newArr.push(elem[i]) 
        }
        else if(elem[i]!==separator && elem[i+1]!==separator){ 
            isi+=elem[i];
            cnt++; 
        }
        else {
            if(isi.length!=0) {newArr.push(isi); isi="" }
            cnt=0;
        }
    }
     
    newArr.push(isi)


    return newArr;
}


console.log(ownSplit(element,"-", 40))