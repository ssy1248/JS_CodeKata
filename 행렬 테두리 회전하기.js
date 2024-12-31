function solution(rows, columns, queries) {
    const matrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );
    const result = [];

    for (const [x1, y1, x2, y2] of queries) {
        const startX = x1 - 1, startY = y1 - 1;
        const endX = x2 - 1, endY = y2 - 1;
        let prevValue = matrix[startX][startY]; // 시작점 값 저장
        let minValue = prevValue;

        // 상단 이동 (왼쪽 → 오른쪽)
        for (let y = startY + 1; y <= endY; y++) {
            const temp = matrix[startX][y];
            matrix[startX][y] = prevValue;
            prevValue = temp;
            minValue = Math.min(minValue, prevValue);
        }

        // 우측 이동 (위 → 아래)
        for (let x = startX + 1; x <= endX; x++) {
            const temp = matrix[x][endY];
            matrix[x][endY] = prevValue;
            prevValue = temp;
            minValue = Math.min(minValue, prevValue);
        }

        // 하단 이동 (오른쪽 → 왼쪽)
        for (let y = endY - 1; y >= startY; y--) {
            const temp = matrix[endX][y];
            matrix[endX][y] = prevValue;
            prevValue = temp;
            minValue = Math.min(minValue, prevValue);
        }

        // 좌측 이동 (아래 → 위)
        for (let x = endX - 1; x >= startX; x--) {
            const temp = matrix[x][startY];
            matrix[x][startY] = prevValue;
            prevValue = temp;
            minValue = Math.min(minValue, prevValue);
        }

        result.push(minValue);
    }

    return result;
}