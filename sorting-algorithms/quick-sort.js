function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pivotIndex = partition(array, low, high)
        quickSort(array, low, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, high)
    }
    return array
}


function partition(array, low, high) {
    let pivot = array[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++
            [array[i], array[j]] = [array[j], array[i]]
        }
    }
    i++
    [array[i], array[high]] = [array[high], array[i]]   
    return i
}

let array = [5, 3, 7,1,2, 6, 2, 9]
console.log(quickSort(array))