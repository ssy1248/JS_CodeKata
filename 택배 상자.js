function solution(order) {
    var answer = 0;
    const stack = [];
    let currentBox = 1;
    
    for(const target of order) {
        while (currentBox <= target) {
            stack.push(currentBox);
            currentBox++;
        }
        
        if(stack[stack.length - 1] === target) {
            stack.pop();
            answer++;
        } else {
            break;
        }
    }

    return answer;
}