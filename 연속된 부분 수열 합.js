function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let currentSum = 0;
    let result = [0, sequence.length]; 

    while (end < sequence.length) {
        currentSum += sequence[end]; 

        while (currentSum > k && start <= end) {
            currentSum -= sequence[start];
            start++;
        }

        if (currentSum === k) {
            if (end - start < result[1] - result[0] || 
                (end - start === result[1] - result[0] && start < result[0]) 
            ) {
                result = [start, end];
            }
        }

        end++;
    }

    return result;
}