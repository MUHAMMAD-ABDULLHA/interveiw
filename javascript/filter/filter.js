function filter (arr, fn){
    let resulting_array = [];
    for (let i = 0; i < arr.length; i++){
        let result = fn(arr[i], i);
        if(result){
            resulting_array.push(arr[i])
        }
    }
    return resulting_array;
}

const arr = [-2,-1,4];
const fn = (n) => { return ( n + 1 )}
console.log(filter(arr,fn))