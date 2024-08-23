function kidWithCandies(candies, extradies) {
    const maxCandies = Math.max(...candies)
   return  candies.map(candie => candie + extradies >= maxCandies)
}

console.log(kidWithCandies( [2,3,5,1,3], 3)) // [true,true,true,false,true];