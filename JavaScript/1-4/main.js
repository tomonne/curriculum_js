let number = 1;
while (number <= 100){
    if (number % 3 != 0 && number % 5 != 0){
        console.log(number);
    } else{
        if (number % 3 === 0){
            if (number % 5 === 0){
                console.log("FizzBuzz!");
            } else{
                console.log("Fizz!");
            }
        } else if (number % 5 === 0){
            console.log("Buzz!");
        }
    }
    number++;
}