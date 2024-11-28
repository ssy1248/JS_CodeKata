function solution(ingredient) {
    let stack = [];
    let answer = 0;

    for (let item of ingredient) {
        stack.push(item);

        if (stack.length >= 4) {
            if (
                stack[stack.length - 4] === 1 &&
                stack[stack.length - 3] === 2 &&
                stack[stack.length - 2] === 3 &&
                stack[stack.length - 1] === 1
            ) {

                stack.splice(-4);
                answer += 1;
            }
        }
    }

    return answer;
}