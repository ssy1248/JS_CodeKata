function solution(s) {
    var answer = true;
    let check = [...s];
    
    for(let i = 0; i <check.length; i++){
        if(check[i] >= "0" && check[i] <= "9")
            answer = true;
        else{
            answer = false;
            break;
        }
    }
    
        if(check.length !== 4 && check.length !== 6)
        answer = false;
    
    return answer;
}