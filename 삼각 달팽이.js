function solution(n) {
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0)); 
   const totalNumbers = (n * (n + 1)) / 2;

   let x = -1, y = 0;
   let num = 1; 
   const directions = [[1, 0], [0, 1], [-1, -1]]; 
   let directionIndex = 0;

   while (num <= totalNumbers) {
       const [dx, dy] = directions[directionIndex];
       x += dx;
       y += dy;
       triangle[x][y] = num++;

       const nextX = x + dx;
       const nextY = y + dy;

       if (
           nextX >= n || nextY > nextX || triangle[nextX][nextY] !== 0
       ) {
           directionIndex = (directionIndex + 1) % 3; 
       }
   }

   return triangle.flat();
}