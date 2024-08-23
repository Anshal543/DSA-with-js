function reverseVowels(s) {
    const character = s.split("")
    const vowels = "aeiouAEIOU"
    let left = 0
    let right = s.length - 1
    while (left < right) {
        while (left < right && vowels.indexOf(character[left]) === -1) {
            left++
        }
        while (left < right && vowels.indexOf(character[right]) === -1) {
            right--
        }

        if (left < right) {
            let temp = character[left]
            character[left] = character[right]
            character[right] = temp
            left++
            right--
        }
    }
    return character.join("")
}

