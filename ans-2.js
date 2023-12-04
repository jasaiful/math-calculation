
// function matchFinder(string1, string2) {
//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return "please provide a valid input"
//     }
//     else {

//         let text = string1
//         if (text.match(string2)) {
//             return true
//         }
//         return false

//     }
// }

// const part1 = "Peter Parker";
// const part2 = "pet";

// matchFinder(part1, part2);


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
const part2 = "Pet";

matchFinder(part1, part2);

console.log(matchFinder(part1, part2))
