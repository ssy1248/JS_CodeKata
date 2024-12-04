function solution(s) {
    var answer = [0,0];
    while (s !== "1"){
        const oldLen = s.length;
        s = s.replace(/0/g, "");
        const newLen = s.length;
        s = newLen.toString('2');

        answer[1] += oldLen - newLen;
        answer[0]++;
    }

    return answer;
}