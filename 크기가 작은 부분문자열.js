function solution(t, p) {
    var answer = 0;
    const pLength = p.length;
    const pNumber = Number(p);
    
    for(let i = 0; i <= t.length - pLength; i++){
        const subStr = t.substring(i, i + pLength);
        const subNumber = Number(subStr);
        
        if(subNumber <= pNumber)
            answer++;
    }
    
    return answer;
}