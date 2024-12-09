function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements); 
    const sums = new Set(); 

    for (let length = 1; length <= n; length++) { 
        for (let i = 0; i < n; i++) {
            const sum = extended.slice(i, i + length).reduce((a, b) => a + b, 0);
            sums.add(sum);
        }
    }

    return sums.size; 
}