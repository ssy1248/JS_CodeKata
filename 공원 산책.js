function solution(park, routes) {
    let startX = 0, startY = 0;
    for (let i = 0; i < park.length; i++) {
        const idx = park[i].indexOf('S');
        if (idx !== -1) {
            startX = i;
            startY = idx;
            break;
        }
    }

    const direction = {
        N: [-1, 0],
        S: [1, 0],
        E: [0, 1], 
        W: [0, -1] 
    };

    for (const route of routes) {
        const [dir, dist] = route.split(' ');
        const [dx, dy] = direction[dir];
        const steps = parseInt(dist, 10);

        let newX = startX;
        let newY = startY;
        let isValid = true;

        for (let step = 0; step < steps; step++) {
            newX += dx;
            newY += dy;

            if (
                newX < 0 || newX >= park.length || 
                newY < 0 || newY >= park[0].length || 
                park[newX][newY] === 'X'
            ) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            startX = newX;
            startY = newY;
        }
    }

    return [startX, startY];
}