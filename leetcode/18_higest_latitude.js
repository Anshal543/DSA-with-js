// gain = [-5,1,5,0,-7]

var largestAltitude = function (gain) {
    let currentAltitude = 0
    let maxAtltitude = 0
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i]
        maxAtltitude = Math.max(maxAtltitude, currentAltitude)
    }
    return maxAtltitude
};