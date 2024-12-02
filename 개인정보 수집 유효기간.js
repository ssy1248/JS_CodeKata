function solution(today, terms, privacies) {
    var answer = [];
    const todayDate = new Date(today.replace(/\./g, "-"));
    const termMap = {};

    terms.forEach(term => {
        const [key, value] = term.split(" ");
        termMap[key] = parseInt(value);
    });
    
    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(" ");
        const startDate = new Date(date.replace(/\./g, "-"));
                                                
        startDate.setMonth(startDate.getMonth() + termMap[termType]);
        
        if(startDate <= todayDate){
            answer.push(index + 1);
        }
    })
    
    return answer;
}