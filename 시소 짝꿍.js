function solution(weights) {
    const ratio = [1, 3 / 2, 2, 4 / 3]; 
    const store = {};
    let count = 0;

    weights.sort((a, b) => b - a).forEach((w) => {
        let s;
        ratio.forEach((i) => {
            if( s = w * i, store[s]) {
                count += store[s];
            }
        });
        if(!store[w])
            store[w] = 1;
        else
            store[w]++;
    });
    
    return count
}