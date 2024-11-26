function solution(keymap, targets) {
    var answer = [];
    
    for(let i = 0; i < targets.length; i++){
        let totalPresses = 0;
        let isImpossible = false; 
        
        for (let j = 0; j < targets[i].length; j++) {
            let char = targets[i][j];
            let minPress = Infinity; 
            
            for (let k = 0; k < keymap.length; k++) {
                let index = keymap[k].indexOf(char);
                if (index !== -1) {
                    minPress = Math.min(minPress, index + 1); 
                }
            }
            
            if (minPress === Infinity) {
                isImpossible = true;
                break;
            } else {
                totalPresses += minPress; 
            }
        }
        
        if (isImpossible) {
            answer.push(-1); 
        } else {
            answer.push(totalPresses);
        }
    }
    
    return answer;
}