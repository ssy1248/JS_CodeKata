function solution(lottos, win_nums) {
    var answer = [];
    let sameNum = 0;
    let deleteNum = 0;
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);
    
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] === 0)
            deleteNum += 1;
        if(win_nums.includes(lottos[i]) > 0)
            sameNum += 1;
    }
    
    const maxRank = Math.min(6, 7 - (sameNum + deleteNum));
    const minRank = Math.min(6, 7 - sameNum);

    answer.push(maxRank);
    answer.push(minRank);
    return answer;
}