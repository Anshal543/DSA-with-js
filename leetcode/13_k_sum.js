var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b)
    let operations = 0
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum === k) {
            operations++
            left++
            right--
        } else if (sum < k) {
            left++
        } else {
            right--
        }
    }
    return operations
};

var maxOperations = function (nums, k) {
    let map = new Map()
    let operations = 0
    for (const num of nums) {
        let complement = k - num
        if (map.get(complement) > 0) {
            operations++
            map.set(complement, map.get(complement) - 1)
        } else {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }
    return operations
}