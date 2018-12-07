const values = require('./input')

let cur_frequency = 0
for (index = 0; index < values.length; index++){
    cur_frequency+= Number(values[index])
}
console.log("result:", cur_frequency)
