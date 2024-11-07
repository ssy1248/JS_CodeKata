function solution(n) {
    var answer = 0;
    let x = 0;
    
    while(x * x < n)
        x++;
    
    if(x * x === n){
        x++;
        answer = x * x;
    }
    else
        answer = -1;
    
    return answer;
}