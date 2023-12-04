function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please input a valid number"
    }
    else {
        const result = number * number * number;
        return result
    }
}

const targetNumber = 3;

cubeNumber(targetNumber);



function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "please provide a valid input"
    }
    else {

        let text = string1
        if (text.match(string2)) {
            return true
        }
        return false
    }
}

const part1 = "Peter Parker";
const part2 = "Pen";

matchFinder(part1, part2);



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

const input = [4, 4];

sortMaker(input);



function findAddress(obj) {
    if (typeof obj !== "object") {
        return "please provide an object first"
    }
    else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__"
        // console.log(street, house, society);
        return street + ", " + house + ", " + society
    }
}

let obj = {
    street: "10",
    house: "15A",
    society: "Earth Perfect"
}

findAddress(obj);



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

const totalEarning = [6, 2, 1];
const totalCost = 10;

canPay(totalEarning, totalCost);