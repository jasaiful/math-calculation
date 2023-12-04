

// function sortMaker(arr) {
//     if (arr[0] <= 0 || arr[1] <= 0) {
//         return "Invalid Input"
//     }
//     else if (arr[0] === arr[1]) {
//         return "equal"
//     }
//     else {
//         arr.sort().reverse();
//     }
//     return arr
// }

// const input = [4, 4];


// function sortMaker(arr) {
//     if (arr[0] <= 0 || arr[1] <= 0) {
//         return "Invalid Input"
//     }
//     else if (arr[0] === arr[1]) {
//         return "equal"
//     }
//     else {
//         arr.sort().reverse();
//     }
//     return arr
// }

// const input = [2, 5];

// console.log(sortMaker(input));

// console.log(sortMaker(input));

function sortMaker(arr) {
    if (arr[0] <= 0 || arr[1] <= 0) {
        return "Invalid Input"
    }
    else if (arr[0] === arr[1]) {
        return "equal"
    }
    else {
        arr.sort().reverse();
    }
    return arr
}
const input = [4, 9];
console.log(sortMaker(input));