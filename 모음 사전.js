function func(word, n) {
    const alpha = "AEIOU";
    let cnt = 0;

    for (let i = 0; i < 5; i++) {
        if (word[n] === alpha[i]) { 
            if (word[n + 1] !== undefined) {
                cnt += func(word, n + 1);
            }
            cnt += 1;
            break;
        } else {
            for (let j = 0, d = 1; j < 5 - n; j++, d *= 5) {
                cnt += d;
            }
        }
    }
    return cnt;
}

function solution(word) {
    return func(word, 0);
}