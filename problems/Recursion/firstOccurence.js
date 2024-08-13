// iterative
function firstOcc(arr,findMe,currentIndex){
    while(currentIndex<arr.length){
        if(arr[currentIndex]==findMe){
            return currentIndex
        }
        currentIndex+=1
    }
    return -1
}

console.log(firstOcc([1,2,3,4,5,6,7,8,9],5,0));

// recursive

function recursiveFirstOcc(arr,findMe,currentIndex){
    if(arr.length===currentIndex){
        return -1
    }
    if(arr[currentIndex]==findMe){
        return currentIndex 
    }
    return recursiveFirstOcc(arr,findMe,currentIndex)
}

console.log(firstOcc([1,2,3,4,5,6,7,8,9],5,0));