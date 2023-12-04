

// function findAddress(obj) {
//     if (typeof obj !== "object") {
//         return "please provide an object first"
//     }
//     else {
//         const street = obj.street || "__";
//         const house = obj.house || "__";
//         const society = obj.society || "__"
//         // console.log(street, house, society);
//         return street + ", " + house + ", " + society
//     }
// }


// let obj = {
//     street: "10",
//     house: "15A",
//     society: "Earth Perfect"
// }

// console.log(findAddress(obj));


function findAddress(obj) {
    if (typeof obj !== "object") {
        return "please provide an object first"
    }
    else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__"
        // console.log(street, house, society);
        return street + "," + house + "," + society
    }
}

let obj = {
    street: "10",
    house: "15A",
    society: "Earth Perfect"
}

console.log(findAddress(obj));
