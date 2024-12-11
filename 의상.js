function solution(clothes) {
    var answer = 0;
    
   const clothesMap = clothes.reduce((map, [item, type]) => {
        map[type] = (map[type] || 0) + 1;
        return map;
    }, {});
    
    let combinations = 1; 
    for (const count of Object.values(clothesMap)) {
        combinations *= (count + 1); 
    }
    answer = combinations - 1;
    return answer;
}