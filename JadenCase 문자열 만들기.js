function solution(s) {
    var answer = '';
    let lower = s.toLowerCase();
    let arr = [...lower.split(" ")]; 
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length > 0) { 
            if (isNaN(arr[i][0])) { 
                arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1); 
            }
        }
    }
    
    answer = arr.join(" ");
    
    return answer;
}