let arr = [9,7,6,5,4,3,2,1];

function f(array, num){
    let arr1=[]
    for(let i=0;i<array.length;i++){
        arr1.push(array[i])
        if(array[i]>=num ){arr1.push(num);}
    }
    return arr1;
}

console.log(f(arr, 8))