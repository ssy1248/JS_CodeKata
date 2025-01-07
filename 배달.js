function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    const dist = Array(N + 1).fill(Infinity);
    
    for(const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    
    const pq = [[0, 1]];
    dist[1] = 0;
    
    while(pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDist, currentNode] = pq.shift();
        
        if(currentDist > dist[currentNode])
            continue;
        
        for(const [nextNode, cost] of graph[currentNode]){
            const nextDist = currentDist + cost;
            
            if(nextDist < dist[nextNode]) {
                dist[nextNode] = nextDist;
                pq.push([nextDist, nextNode]);
            }
        }
    }
    
    return dist.filter(d => d <= K).length;
}