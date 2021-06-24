let checingString = function(strings, maxLenght) {
    if(strings.length <= maxLenght) {
        return true
    }
    return false
}

console.log(checingString(10, 100))

const authorNumber = function(min, max){
    if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
    }
    return String('0' + (Math.floor(Math.random() * (max - min) + min)));
};
    
console.log(authorNumber(11, 100))