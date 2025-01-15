function solution(places) {
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];
    const checkManhattan = (place, x, y) => {
        const queue = [[x, y, 0]]; 
        const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
        visited[x][y] = true;

        while (queue.length > 0) {
            const [cx, cy, dist] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;

                if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
                if (visited[nx][ny]) continue;

                visited[nx][ny] = true;

                if (dist + 1 <= 2) {
                    if (place[nx][ny] === 'P') {
                        return false;
                    }
                    if (place[nx][ny] === 'O') {
                        queue.push([nx, ny, dist + 1]);
                    }
                }
            }
        }

        return true;
    };

    return places.map(place => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (place[i][j] === 'P') {
                    if (!checkManhattan(place, i, j)) {
                        return 0;
                    }
                }
            }
        }
        return 1;
    });
}
