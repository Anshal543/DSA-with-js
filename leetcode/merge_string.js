function mergeAlterne(word1, word2) {
    let merged = ""
    let j = 0
    let i = 0
    while (i < word1.length && j < word2.length) {
        merged += word1[i]
        merged += word2[j]
        i++
        j++
    }

    while (i < word1.length) {
        merged += word1[i]
        i++
    }
    while (j < word2.length) {
        merged += word2[j]
        j++
    }
    return merged
}

console.log(mergeAlterne("ans", "shaaa"));