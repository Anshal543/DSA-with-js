var asteroidCollision = function (asteroids) {
    let stack = []
    for (const asteroid of asteroids) {
        let exlode = false
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const rightAsteroid = stack.pop()
            if (Math.abs(asteroid) === rightAsteroid) {
                exlode = true
                break
            } else if (Math.abs(asteroid) < rightAsteroid) {
                asteroid = 0
                stack.push(rightAsteroid)
                break
            }
        }
        if (!exlode && asteroid !== 0) {
            stack.push(asteroid)
        }
    }
    return stack
};