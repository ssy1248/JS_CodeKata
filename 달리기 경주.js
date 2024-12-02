function solution(players, callings) {
    var answer = [];
    const playerIndexMap = new Map(players.map((player, index) => [player, index]));
    
    for(let i = 0; i < callings.length; i++){
        let curRank = playerIndexMap.get(callings[i]);
        
        if(curRank > 0){
            const prevPlayer = players[curRank - 1];
            players[curRank - 1] = players[curRank];
            players[curRank] = prevPlayer;
            
            playerIndexMap.set(callings[i], curRank - 1);
            playerIndexMap.set(prevPlayer, curRank);
        }
    }
    
    return players;
}