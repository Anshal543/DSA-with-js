function bubbleSort(array) {
    let isSwap;
    do {
        isSwap = false
        for (let i = 0; i < array.length; i++) {
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                isSwap = true

            }
        }
    } while (isSwap);
    return array
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4])) // [1, 2, 3, 4, 5, 8];