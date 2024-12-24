function solution(number, k) {
    let answer = ""; 
    let cnt = 0; 
    let len = 0;
    let temp = number; 

    while (k > cnt && number.length - k > len) {
        let max = '0'; 
        let index = 0; 

        for (let i = 0; i <= k - cnt; i++) {
            if (temp[i] > max) {
                max = temp[i];
                index = i;
                if (max === '9') break; 
            }
        }

        answer += max;
        len++;
        cnt += index;

        temp = temp.slice(index + 1);
    }

    if (number.length - k > len) {
        answer += temp.slice(0, number.length - k - len);
    }

    return answer;
}