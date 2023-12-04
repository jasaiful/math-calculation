
// function canPay(changeArray, totalDue) {
//     if (changeArray.length === 0) {
//         return "empty array is not accepted, please input numbers here to go next"
//     }
//     else {
//         let sum = 0;
//         for (i = 0; i < changeArray.length; i++)
//             sum = sum + changeArray[i]
//         if (sum >= totalDue) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }

// const totalEarning = [6, 2, 1];
// const totalCost = 10;

// console.log(canPay(totalEarning, totalCost));


function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "empty array is not accepted, please input numbers here to go next"
    }
    else {
        let sum = 0;
        for (i = 0; i < changeArray.length; i++)
            sum = sum + changeArray[i]
        if (sum >= totalDue) {
            return true
        }
        else {
            return false
        }
    }
}

const totalEarning = [6, 2, 2];
const totalCost = 10;


console.log(canPay(totalEarning, totalCost));