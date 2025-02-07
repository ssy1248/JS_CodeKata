function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    function getMultiSet(s) {
      const multiSet = new Map();
      for (let i = 0; i < s.length - 1; i++) {
        const pair = s.substring(i, i + 2);
        if (/^[a-z]{2}$/.test(pair)) {
          multiSet.set(pair, (multiSet.get(pair) || 0) + 1);
        }
      }
      return multiSet;
    }
  
    const multiSet1 = getMultiSet(str1);
    const multiSet2 = getMultiSet(str2);
  
    let intersection = 0;
    let union = 0;
    
    const allKeys = new Set([...multiSet1.keys(), ...multiSet2.keys()]);
    allKeys.forEach(key => {
      const count1 = multiSet1.get(key) || 0;
      const count2 = multiSet2.get(key) || 0;
      intersection += Math.min(count1, count2);
      union += Math.max(count1, count2);
    });
  
    const jaccardSimilarity = union === 0 ? 1 : intersection / union;
  
    return Math.floor(jaccardSimilarity * 65536);
  }