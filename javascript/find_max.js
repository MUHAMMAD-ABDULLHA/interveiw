
function findMax (arr) {
  let max = arr[0];
  if (!arr || arr.length === 0){
    return undefined;
  }
  for (let i = 1; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max
}

const arr = [-4, -9, 2, -15, -7];
console.log(findMax(arr));

