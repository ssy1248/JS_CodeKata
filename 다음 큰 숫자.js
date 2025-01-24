function solution(n) {
    let c = n;
    let count = 0;
    
    while (c > 0) {
        count += c & 1;
        c >>= 1;
    }
    
    while (true) {
        n++;
        let temp = n;
        let newCount = 0;
        
        while (temp > 0) {
            newCount += temp & 1;
            temp >>= 1;
        }
        
        if (newCount === count) {
            return n;
        }
    }
}