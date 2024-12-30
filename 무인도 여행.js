function solution(maps) {
    const rows = maps.length;
   const cols = maps[0].length;
   const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
   const result = [];

   const directions = [
       [0, 1], 
       [1, 0], 
       [0, -1],
       [-1, 0] 
   ];

   function dfs(x, y) {
       const stack = [[x, y]];
       visited[x][y] = true;
       let sum = parseInt(maps[x][y]);

       while (stack.length > 0) {
           const [cx, cy] = stack.pop();

           for (const [dx, dy] of directions) {
               const nx = cx + dx;
               const ny = cy + dy;

               if (
                   nx >= 0 && nx < rows &&
                   ny >= 0 && ny < cols &&
                   !visited[nx][ny] &&
                   maps[nx][ny] !== 'X'
               ) {
                   stack.push([nx, ny]);
                   visited[nx][ny] = true;
                   sum += parseInt(maps[nx][ny]);
               }
           }
       }

       return sum;
   }

   for (let i = 0; i < rows; i++) {
       for (let j = 0; j < cols; j++) {
           if (!visited[i][j] && maps[i][j] !== 'X') {
               const islandSize = dfs(i, j);
               result.push(islandSize);
           }
       }
   }

   return result.length ? result.sort((a, b) => a - b) : [-1];
}