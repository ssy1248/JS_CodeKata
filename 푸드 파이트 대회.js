function solution(food) {
    var answer = '';
    let leftPart = '';
     for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2); 
        leftPart += i.toString().repeat(count); 
    }

    let rightPart = leftPart.split('').reverse().join('');
    
    answer = leftPart + '0' + rightPart;
    return answer;
}