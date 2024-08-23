function productExceptSelf(nums) {
    let length = nums.length
    let left = Array(length).fill(1)
    let right = Array(length).fill(1)
    let answer = Array(length)
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1]
    }
    console.log(left);
    for (let j = length - 2; j >= 0; j--) {
        right[j] = nums[j + 1] * right[j + 1]
    }
    console.log(right);

    for (let k = 0; k < length; k++) {
        answer[k] = left[k] * right[k]
    }
    return answer
}

console.log(productExceptSelf([1, 2, 3, 4]));