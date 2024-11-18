function solution(k, score) {
    var answer = [];
    
   let arr = [];
    
    for (let i = 0; i < score.length; i++) {
        if (arr.length < k) {
            arr.push(score[i]);
        } else {
            let minScore = Math.min(...arr);
            if (score[i] > minScore) {
                arr[arr.indexOf(minScore)] = score[i];
            }
        }
        
        answer.push(Math.min(...arr));
    }
    
    return answer;
}