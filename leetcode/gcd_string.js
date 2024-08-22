function gcdString(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""
    function gcd(a, b) {
        if (b == "") return a
        return gcd(b, a.slice(0, a.length % b.length))
    }
    return gcd(str1, str2)
}

console.log(gcdString("ABCABC", "ABCABCABC")) // ABC