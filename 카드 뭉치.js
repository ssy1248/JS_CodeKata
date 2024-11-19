function solution(cards1, cards2, goal) {
    var answer = '';
    let cnt = 0;
    let i = 0;
    let j = 0;
    
    while(cnt < goal.length){    
        if(i < cards1.length &&cards1[i] === goal[cnt]){
            i++;
            cnt++;
        } else if(j < cards2.length && cards2[j] === goal[cnt]){
            j++;
            cnt++;
        } else{
            answer = "No";
            break;
        }       
        
        if(cnt > goal.length - 1){
            answer = "Yes";
            break;
        }
    }
    
    return answer;
}