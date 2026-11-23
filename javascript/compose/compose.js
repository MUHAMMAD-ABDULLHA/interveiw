var compose = function(functions){
    return function(x){
        let result = x;
        for(let i = functions.length - 1; i >= 0; i--){
            result = functions[i](result);
        }
        return result;
    }
}

const functions = [
  x => x + 1,
  x => x * x,
  x => 2 * x
];

// Step 1: Pass `functions` -> returns a new function `fn`
const fn = compose(functions);

// Step 2: Pass `x = 4` to `fn`
const output = fn(4);

console.log(output); // 65