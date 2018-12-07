const simple_input = "+3, +3, +4, -2, -4".split("\,")
const real_values = require('./input')

let frequencies_set = new Set();
let cur_frequency = 0;
let result = "init";

function calcTwiseFrequency(input_data){
    while (result == "init") {
        for (index = 0; index < input_data.length; index++) {
            cur_input = Number(input_data[index])
            cur_frequency += cur_input
            if (frequencies_set.has(cur_frequency)) {
                result = cur_frequency
                break;
            }
            else {
                frequencies_set.add(cur_frequency)
            }
        }
    }
    console.log("twise frequency is:", result)
};

calcTwiseFrequency(real_values)
