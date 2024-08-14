function checkPalindrome(string) {
    if (string.length <= 1) {
        return true
    }
    if (string[0] == string[string.length - 1]) {

        return checkPalindrome(string.substring(1, string.length - 1))
    }
    return false
}

console.log(checkPalindrome("madam"));

function palindrome(string){
    let start = 0
    let end = string.length-1
    while(start<end){
        if(string[start]==string[end]){
            start++
            end--
            return true
        }
        else{
            return false
        }
    }
    return true
}

console.log(palindrome("wow"));