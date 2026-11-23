function reduce(nums, fn, init){
    let result = init;
    for(let i = 0; i < nums.length; i++){
        result = fn(result, nums[i]);
    }
    return result;
}

let nums = [1,2,3,4];
function sum(accum, curr) { 
  console.log(`${accum} and ${curr}`);
  return accum + curr * curr; }
console.log(reduce(nums,sum,100))