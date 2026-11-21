// function removeDuplicates(arr){
//     let resulting_array = [];
//     for (let i = 0; i < arr.length; i++){
//         if(!resulting_array.includes(arr[i])){
//             resulting_array.push(arr[i])
//         }
//     }
//     return resulting_array;
// }
function removeDuplicates(arr){
    return Array.from(new Set(arr));
}
console.log(removeDuplicates(["hello", 1, 2 , "hello", 2,2 ,2 ]))