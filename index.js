function createClosure() {
    let sum = 0;
    return function (value) {
        sum += value;
        return sum;
    }
}
const sum = createClosure();

//Examples
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
