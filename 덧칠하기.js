function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    for(var section of section) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}