function solution(nums) {
    const combinations = getCombinations(nums, 3);
    let answer = 0;

    combinations.forEach(combination => {
        const sum = combination.reduce((acc, val) => acc + val, 0);
        if (isPrime(sum)) {
            answer += 1; 
        }
    });

    return answer; 
}

function getCombinations(arr, num) {
    const result = [];

    function combine(start, current) {
        if (current.length === num) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            combine(i + 1, current);
            current.pop();
        }
    }

    combine(0, []);
    return result;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}