function solution(my_string, indices) {
    var answer = '';
    
    const excludeSet = new Set(indices);
    
    for (let i = 0; i < my_string.length; i++) {
        if (!excludeSet.has(i)) {
            answer += my_string[i];
        }
    }
    
    return answer;
}