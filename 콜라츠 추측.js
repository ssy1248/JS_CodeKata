function solution(num) {
    var answer = 0;
    let cnt = 0;
    
    while(num != 1 && cnt != 500){
        num % 2 === 0 ? num /= 2 : num = (num * 3) + 1;
        cnt++;
    }
    
    return cnt === 500 ? -1 : cnt;
}