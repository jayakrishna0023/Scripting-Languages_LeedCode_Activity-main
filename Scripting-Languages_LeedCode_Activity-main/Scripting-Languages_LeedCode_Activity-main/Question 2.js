function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        if (char in map) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
