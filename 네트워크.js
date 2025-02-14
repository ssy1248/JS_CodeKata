function solution(n, computers) {
    const visited = Array(n).fill(false);
    let networkCount = 0;
    
    function dfs(current) {
      visited[current] = true;
      
      for (let next = 0; next < n; next++) {
        if (computers[current][next] === 1 && !visited[next]) {
          dfs(next);
        }
      }
    }
    
    for (let i = 0; i < n; i++) {
      if (!visited[i]) { 
        dfs(i);
        networkCount++; 
      }
    }
    
    return networkCount;
  }