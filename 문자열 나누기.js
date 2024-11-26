function solution(s) {
    var answer = 0;
    let X = 0;
    let Y = 0;
    let first = "";
    
    for(let i = 0; i < s.length; i++){
        if(X === 0 && Y === 0){
            first = s[i];
            X += 1;
        } else {
            if(first === s[i]){
                X++;
            } else {
                Y++;
            }
        }
        
        if(X === Y){
            answer++;
            X = 0;
            Y = 0;
        }
    }
    
    if(X > 0 || Y > 0)
        answer++;
    
    return answer;
}