const __ = require('lodash');
const num = __.random(0, 20)

console.log(num)


const grt = __.once(() => {
    console.log("hello!!!")
})

grt();