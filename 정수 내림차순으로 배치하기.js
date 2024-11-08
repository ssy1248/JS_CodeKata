function solution(n) {
    var answer = 0;
    let arr = String(n).split('');
    arr.sort((a, b) => b - a);
    
    answer = parseInt(arr.join(''), 10);
    
    return answer;
}