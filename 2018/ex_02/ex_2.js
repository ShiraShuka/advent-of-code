const values = require('./input')

// that's what happen when you don't understand the requirements
// calculated the unique count of two and three repetitions 
function calc_box_ids(input) {
    let twos_set = new Set();
    let threes_set = new Set();

    for (let index = 0; index < input.length; index++) {
        let letters = new Map();
        for (let char_index = 0; char_index < input[index].length; char_index++) {
            char = input[index].charAt(char_index);
            if (letters.has(char)) {
                letters.set(char, letters.get(char) + 1);
            }
            else {
                letters.set(char, 1);
            }
        }
        letters.forEach(function (value, key) {
            if (value == 2) {
                twos_set.add(key)
            }
            else if (value == 3) {
                threes_set.add(key)
            }
        });
    }
    checksum = twos_set.size * threes_set.size;
    console.log("result: ", checksum)
}

calc_box_ids('aaad,ababb,ccce'.split(","))
calc_box_ids(values)