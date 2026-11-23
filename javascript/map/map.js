function map (arr, fn){
    let resulting_array = [];
    for (let i = 0; i < arr.length; i++){
        resulting_array.push((fn(arr[i], i)))
    }
    return resulting_array;
}

const arr = [2,3,4];
const fn = (n) => { return ( n + 1 )}
console.log(map(arr,fn))