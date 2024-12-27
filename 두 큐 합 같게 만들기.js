function solution(queue1, queue2) {
    const combined = [...queue1, ...queue2];
    const target = (queue1.reduce((a, b) => a + b) + queue2.reduce((a, b) => a + b)) / 2;
    
    let left = 0;
    let right = queue1.length;
    let currentSum = queue1.reduce((a, b) => a + b);
    const maxOperations = combined.length * 2;
    
    for(let count = 0; count < maxOperations; count++) {
        if(currentSum === target)
            return count;
        
        if(currentSum > target) {
            currentSum -= combined[left];
            left++;
        } else {
            currentSum += combined[right];
            right++;
        }
    }
    
    return -1;
}