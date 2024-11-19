function solution(k, m, score) {
    var answer = 0;
    let box = [];
    let minbox = [];
    score.sort((a, b) => b - a);
    
    for(let i = 0; i < score.length; i += m){
        let subArray = score.slice(i, i + m);
        
        if (subArray.length === m) {
            box.push(subArray);
        }
    }
    
     box.forEach(subArray => {
        answer += (Math.min(...subArray) * m);
    });
    
    return answer;
}