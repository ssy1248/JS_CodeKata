function solution(k, tangerine) {
    var answer = 0;
    
    const sizeCount = new Map();
    for(const size of tangerine) {
        sizeCount.set(size, (sizeCount.get(size) || 0) + 1)
    }
    
    const sortedCounts = [...sizeCount.values()].sort((a, b) => b - a);
    
    let total = 0;
    for(const freq of sortedCounts) {
        total += freq;
        answer++;
        if(total >= k)
            break;
    }
    return answer;
}