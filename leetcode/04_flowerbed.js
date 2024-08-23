function canPlaceFlower(flowerbed, n) {
    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let isEmptyLeft = (i === 0 || flowerbed[i - 1] === 0)
            let isEmptyRight = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
            if (isEmptyLeft && isEmptyRight) {
                flowerbed[i] = 1
                count++
                if (count >= n) {
                    return true
                }
            }
        }
    }
    return count >= n
}

console.log(canPlaceFlower([0, 0, 1, 0, 0], 2)) // true
