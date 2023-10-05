// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

// Start coding here
minNumber = numbers[0]
for(let i =1;i<numbers.length;i++){
    if(numbers[i]<minNumber){
        minNumber=numbers[i];
    }else{

    }
}
console.log(minNumber);