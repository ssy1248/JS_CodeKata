function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    var answer = 0;
    let convert = n.toString(k);
    let cut = convert.split('0').filter(num => num !== "");
    
     for (const cutting of cut) {
        if (isPrime(Number(cutting))) {
            answer++;
        }
    }
    
    return answer;
}