function solution(babbling) {
    var answer = 0;
    const words = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        let current = babbling[i];
        let previousWord = ""; 

        while (current.length > 0) {
            let found = false;

            for (let word of words) {
                if (current.startsWith(word) && previousWord !== word) {
                    current = current.slice(word.length);
                    previousWord = word; 
                    found = true;
                    break;
                }
            }

            if (!found) 
                break; 
        }

        if (current.length === 0) {
            answer += 1;
        }
    }
    return answer;
}