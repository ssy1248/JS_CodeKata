function solution(n, left, right) {
    let result = [];
    
    for (let k = left; k <= right; k++) {
        const row = Math.floor(k / n); 
        const col = k % n; 
        result.push(Math.max(row + 1, col + 1));
    }
    
    return result;
}