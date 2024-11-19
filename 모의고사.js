function solution(answers) {
    var answer = [];
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let p1a = answers.filter((a, i)=> a === p1[i % p1.length]).length;
    let p2a = answers.filter((a, i)=> a === p2[i % p2.length]).length;
    let p3a = answers.filter((a, i)=> a === p3[i % p3.length]).length;
    
    let max = Math.max(p1a, p2a, p3a);
    
    if(p1a === max)
        answer.push(1);
    if(p2a === max)
        answer.push(2);
    if(p3a === max)
        answer.push(3);
    return answer;
}