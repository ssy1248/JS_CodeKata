function solution(number, limit, power) {
    var answer = 0;
    
    for(let j = 1; j <= number; j++){
        let divisorCount = 0;

        for (let i = 1; i <= Math.sqrt(j); i++) {
            if (j % i === 0) {
                divisorCount++; 
                if (i !== j / i) {
                    divisorCount++; 
                }
            }
        }

        if (divisorCount > limit) {
            divisorCount = power;
        }

        answer += divisorCount; 
    }
    return answer;
}