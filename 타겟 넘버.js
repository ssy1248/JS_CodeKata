function dfs(numbers, target, count = 0, sum = 0) {
    if (count === numbers.length) {
        return sum === target ? 1 : 0;
    }

    return (
        dfs(numbers, target, count + 1, sum + numbers[count]) +
        dfs(numbers, target, count + 1, sum - numbers[count])
    );
}

function solution(numbers, target) {
    return dfs(numbers, target);
}