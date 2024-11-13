function solution(strings, n) {
    var answer = [];
    const modify = strings.map(word => word[n] + word);
   
    modify.sort();
    
    return modify.map(word => word.slice(1));
}