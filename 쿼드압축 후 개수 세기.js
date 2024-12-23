function solution(arr) {
    const result = [0, 0];

    function compress(x, y, size) {
        const first = arr[x][y]; 

        let isUniform = true;
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== first) {
                    isUniform = false;
                    break;
                }
            }
            if (!isUniform) break;
        }

        if (isUniform) {
            result[first]++;
        } else {
            const half = size / 2;
            compress(x, y, half);
            compress(x, y + half, half); 
            compress(x + half, y, half);
            compress(x + half, y + half, half); 
        }
    }

    compress(0, 0, arr.length);
    return result;
}
