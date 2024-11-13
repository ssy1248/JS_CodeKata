function solution(s, n) {
    var answer = '';
    
    for(let i = 0; i < s.length; i++){
        let check = s[i].charCodeAt();
        
        if(s[i] === ' '){
            answer += ' ';
            continue;
        }
            
        if(check >= 65 && check <= 90){
            check += n;
            if(check > 90)
                check -= 26;
        }
        else if (check >= 97 && check <= 122){
            check += n;
            if(check > 122)
                check -= 26;
        }
        
        answer += String.fromCharCode(check);
    }
    
    return answer;
}