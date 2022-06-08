let arr = [9,7,6,5,4,3,2,1];

function f(aray, num){
   let  arr1=[];
   for(let i=0; i<aray.length; i++){
       arr1.push(aray[i])
       if(aray[i]>num && aray[i+1]<num  ){arr1.push(num);}
   }
 return arr1;
}

console.log(f(arr, 8))