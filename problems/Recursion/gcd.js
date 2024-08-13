function gcd(num1, num2) {

    if (num1 == 0 || num2 == 0) {
        return 0
    }
    if (num1 == num2) {
        return num1
    }
    if (num1 > num2) {
        return gcd(num1 - num2, num2)
    } else {
        return gcd(num1, num2 - num1)
    }

}

console.log(gcd(42, 18));