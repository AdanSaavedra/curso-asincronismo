function sum(num1, num2){
    return num1 + num2
}

function calc(num1,num2,callback){
    return callback(num1,num2)
}

console.log(calc(2,2,sum))

setTimeout(function () {
    console.log('Hello JavaScript')
}, 5000)

function greetings(name, age){
    console.log(`Hello ${name}, you have ${age}`)
}

setTimeout(greetings, 2000, 'Adan', 22)