var uniqueOccurrences = function(arr) {
  const uniqueMap = new Map()
  for (const num of arr) {
    uniqueMap.set(num,(uniqueMap.get(num)||0)+1)
  }  
  const uniqueSet = new Set()
  for (const count of uniqueMap.values()) {
    if(uniqueSet.has(count)) return false
    uniqueSet.add(count)
  }
  return true
};