function solution(x) {
    var answer = true;
    let num = x;
    let check = 0;
    while(num !== 0){
        check += (num % 10);
        num = Math.floor(num /= 10);
    }
    
    if(x % check === 0)
        answer = true;
    else
        answer = false;
        
    return answer;
}