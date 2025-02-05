function solution(n, words) {
    const used = new Set();
    used.add(words[0]);
    
    for (let i = 1; i < words.length; i++) {
      const prevWord = words[i - 1];
      const currWord = words[i];
      
      if (currWord[0] !== prevWord[prevWord.length - 1]) {
        const player = (i % n) + 1;
        const turn = Math.floor(i / n) + 1;
        return [player, turn];
      }
      
      if (used.has(currWord)) {
        const player = (i % n) + 1;
        const turn = Math.floor(i / n) + 1;
        return [player, turn];
      }
  
      used.add(currWord);
    }
    
    return [0, 0];
  }