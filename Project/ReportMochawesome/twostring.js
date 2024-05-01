function twoStrings(s1, s2) {

    const set = new Set();
    
    for (let char of s1) {
        set.add(char);
    }

    for (let char of s2) {
        if (set.has(char)) {
            return "YES";
        }
    }

    return "NO";
}

export default twoStrings