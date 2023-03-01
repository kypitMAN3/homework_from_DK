class Calculator {

    methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };
  
    calculate = function(str) {
  
        let split = str.split(' '),
        a = BigInt(split[0]),
        op = split[1],
        b = BigInt(split[2])
  
        return this.methods[op](a, b);
    }
  
}

let calc = new Calculator;

console.log(calc.calculate('12567890987656789098765678909876567890987654213141223 + 25678909876567890987656789098765678909876542131412233123132'));