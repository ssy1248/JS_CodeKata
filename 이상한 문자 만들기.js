function solution(s) {
    var answer = '';
    let str = s.split(" ");
    
    for(let i = 0; i < str.length; i++){
        let word = str[i].split(''); 
        for(let j = 0; j < word.length; j++){
            if(j % 2 === 0){
                answer += word[j].toUpperCase(); 
            } else {
                answer += word[j].toLowerCase();
            }
        }
        if (i < str.length - 1) {
            answer += ' '; 
        }
    }
    
    return answer;
}