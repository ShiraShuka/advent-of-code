const values = require('./input')

function calc_box_ids(input) {
    let twos_count = 0;
    let threes_count = 0;

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

        if (Array.from(letters.values()).includes(2)) {
            twos_count+=1;
        };
        if (Array.from(letters.values()).includes(3)) {
            threes_count+=1;
        };

    }
    checksum = twos_count * threes_count;
    console.log("result: ", checksum)
}

calc_box_ids('aaad,ababb,ccce'.split(","))
calc_box_ids(values)