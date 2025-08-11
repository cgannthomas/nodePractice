// console.log(global); //will show all globally available functions

//Timeout function
global.setTimeout(() => {
    console.log("-------------END-------------")
}, 3000);


//Time interval function
const intr = setInterval(() => {
    console.log("-------------in the interval-------------")
}, 1000);

clearInterval(intr);

//directory name
console.log(__dirname);

//filename
console.log(__filename)