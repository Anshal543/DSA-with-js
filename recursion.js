function printNumber(min,max){
    if(min>max){
        return;
    }
    console.log(min);
    printNumber(min+1,max);
}

printNumber(1,5);