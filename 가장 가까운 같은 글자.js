function solution(s) {
    var answer = [];
    let charIndices = {};
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        
        if(char in charIndices){
            let distance = i - charIndices[char];
            answer.push(distance);
        }else{
            answer.push(-1);
        }
        
        charIndices[char] = i;
    }
    
    return answer;
}