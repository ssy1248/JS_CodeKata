function solution(s) {
    let answer = 0;
    const len = s.length;

    for (let i = 0; i < len; i++) {
        const stack = [];
        let isValid = true;

        for (let j = 0; j < len; j++) {
            const ch = s[(i + j) % len];
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            } else {
                if (stack.length === 0) {
                    isValid = false;
                    break;
                }
                const top = stack.pop();
                if ((ch === ')' && top !== '(') ||
                    (ch === '}' && top !== '{') ||
                    (ch === ']' && top !== '[')) {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid && stack.length === 0) {
            answer++;
        }
    }

    return answer;
}