function solution(s) {
    const sets = s
      .slice(2, -2)
      .split("},{")
      .map(setStr => setStr.split(",").map(Number));
    
    sets.sort((a, b) => a.length - b.length);
    
    const answer = [];
    
    sets.forEach(setArr => {
      setArr.forEach(num => {
        if (!answer.includes(num)) {
          answer.push(num);
        }
      });
    });
    
    return answer;
  }