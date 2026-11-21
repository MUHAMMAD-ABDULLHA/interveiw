function fizzbuzzArray(n){
    let resulting_array = [];
    for (let i = 1; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            resulting_array.push("fizzbuzz");
        } else if(i % 3 === 0 ){
            resulting_array.push("fizz");
        } else if (i % 5 === 0 ){ 
            resulting_array.push("buzz")
        } else {
            resulting_array.push(i);
        }
    }
    return resulting_array;    
}
console.log(fizzbuzzArray(10000000))