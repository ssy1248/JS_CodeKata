function solution(want, number, discount) {
    var answer = 0;
    
    const wantMap = new Map();
    for(let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    for(let i = 0; i <= discount.length - 10; i++){
        const currentMap = new Map();
        
        for(let j = i; j < i + 10; j++) {
            const item = discount[j];
            currentMap.set(item, (currentMap.get(item) || 0) + 1);
        }
        
        let isValid = true;
        for(const [item, count] of wantMap.entries()) {
            if((currentMap.get(item) || 0) < count) {
                isValid = false;
                break;
            }
        }
        
        if(isValid)
            answer++;
    }
    return answer;
}