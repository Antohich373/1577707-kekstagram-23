const checingString = function(strings, maxLenght) {

    if(strings.length <= maxLenght) {

        return true
        
    };

    return false

};

checingString(10, 100);

const authorNumber = function(min, max){

    if(min >= max || max <= min || min < 0 || max < 0) {

    throw(new Error('Ошибка - введите числа корректно'));

    };

    return String('0' + (Math.floor(Math.random() * (max - min) + min)));

};

authorNumber(11, 100);