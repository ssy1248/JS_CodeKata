function isPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; 
    }
    return true;
}

function generatePermutations(arr) {
    const results = [];
    const used = Array(arr.length).fill(false);

    function backtrack(current) {
        if (current.length === arr.length) {
            results.push([...current].join(""));
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            current.push(arr[i]);
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return results;
}

function solution(numbers) {
    const uniquePrimes = new Set();
    
    const digits = numbers.split("");
    digits.sort();
    const permutations = generatePermutations(digits);
    
    for (const perm of permutations) {
        for (let i = 1; i <= perm.length; i++) {
            const num = parseInt(perm.slice(0, i));
            if(isPrime(num)) {
                uniquePrimes.add(num);
            }
        }
    }
    
    return uniquePrimes.size;
}