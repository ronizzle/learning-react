var numbers = [1, 2, 3, 4, 5]
var odd = []

for(var i=0; i < numbers.length; i ++) {
    if(numbers[i] % 2 !== 0){
        odd.push(numbers[i])
    }
}

console.log(odd) // [1,3,5]