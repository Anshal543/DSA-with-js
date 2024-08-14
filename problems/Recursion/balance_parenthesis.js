function balancePar(array, startIndex = 0, currentIndex = 0) {
    if (startIndex == array.length) {
        return currentIndex == 0;
    }
    if (currentIndex < 0) {
        return false;
    }
    if (array[startIndex] == "(") {
        return balancePar(array, startIndex + 1, currentIndex + 1);
    } else if (array[startIndex] == ")") {
        return balancePar(array, startIndex + 1, currentIndex - 1);
    } else {
        return false;
    }
}

console.log(balancePar(["(", "(", ")", ")"]));

function itrerativeBalancePar(array) {
    let stack = [];
    let map = {
        "[": "]",
        "{": "}",
        "(": ")",
    };
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "[" || array[i] == "{" || array[i] == "(") {
            stack.push(array[i]);
        } else {
            let last = stack.pop();
            if (array[i] == map[last]) {
                return true;
            } else {
                return false;
            }
        }
    }
    if (stack.length != 0) {
        return false;
    }
    return true;
}

console.log(itrerativeBalancePar("{({})}"));

function recursiveBalancePar(array, startIndex = 0, stack = []) {
    if (startIndex === array.length) {
        return stack.length === 0;
    }
    const currentChar = array[startIndex];
    if (
        currentChar === "[" ||
        currentChar === "{" ||
        currentChar === "("
    ) {
        stack.push(currentChar);
    } else if (currentChar === ")" || currentChar === "}" || currentChar === "]") {
        if (stack.length === 0) return false;
        const last = stack.pop();

        if ((array[currentChar] === "]" && last !== "[") ||
            (array[currentChar] === "}" && last !== "{") ||
            (array[currentChar] === ")" && last !== "(")) {
            return false;
        }
    } else {
        return false;
    }
    return recursiveBalancePar(array, startIndex + 1, stack);
}

console.log(recursiveBalancePar(["(", "{", "[", "]", "}", ")"]));



