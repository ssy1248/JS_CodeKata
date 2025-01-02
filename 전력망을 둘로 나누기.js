function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }

    function bfs(start, excludeA, excludeB) {
        const visited = Array(n + 1).fill(false);
        const queue = [start];
        visited[start] = true;
        let count = 1;

        while (queue.length > 0) {
            const node = queue.shift();
            for (const neighbor of graph[node]) {
                if ((node === excludeA && neighbor === excludeB) || 
                    (node === excludeB && neighbor === excludeA)) {
                    continue;
                }
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    count++;
                }
            }
        }

        return count;
    }

    let minDifference = Infinity;
    for (const [a, b] of wires) {
        const group1 = bfs(a, a, b); 
        const group2 = n - group1; 
        minDifference = Math.min(minDifference, Math.abs(group1 - group2));
    }

    return minDifference;
}