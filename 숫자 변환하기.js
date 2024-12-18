function solution(x, y, n) {
    if(x === y)
        return 0;
    
    const queue = [[x, 0]];
    let front = 0;
    const visited = new Set();
    visited.add(x);
    
     while (front < queue.length) {
        const [current, count] = queue[front++]; 
        
        const nextNumbers = [current + n, current * 2, current * 3];
        
        for (const next of nextNumbers) {
            if (next > y || visited.has(next)) continue;
            
            if (next === y) {
                return count + 1; 
            }
            
            visited.add(next); 
            queue.push([next, count + 1]);
        }
    }
    return -1;
}