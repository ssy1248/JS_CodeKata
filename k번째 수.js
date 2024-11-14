function solution(array, commands) {
    var answer = [];
    
    for(let i = 0; i < commands.length; i++){
        let start = commands[i][0];
        let end = commands[i][1];
        let num = commands[i][2];
        
        let arr = array.slice(start - 1, end);
        arr.sort((a, b) => a - b);
        answer.push(arr[num - 1]);
    }
    
    return answer;
}