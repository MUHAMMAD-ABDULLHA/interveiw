
function findMax (arr) {

    // return if array is empty
    if (!arr || arr.length === 0){
        return undefined;
    }

	// should initialize with first element of array 
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        // if current item is greater than current max 
        if (arr[i] > max) {
        max = arr[i];
        }
    }
    return max
}

const arr = [-4, -9, 2, -15, -7];
console.log(findMax(arr));

