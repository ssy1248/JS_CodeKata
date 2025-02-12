function solution(maps) {
    const n = maps.length;    
  const m = maps[0].length;   
  
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  
  const queue = [];
  queue.push([0, 0, 1]);
  
  maps[0][0] = 0;
  
  while (queue.length) {
    const [x, y, dist] = queue.shift();
    
    if (x === n - 1 && y === m - 1) {
      return dist;
    }
    
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  
  return -1;
}