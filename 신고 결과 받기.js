function solution(id_list, report, k) {
    const uniqueReports = [...new Set(report)];
    const reportCounts = {}; 
    const reporters = {}; 

    id_list.forEach(user => {
        reportCounts[user] = 0; 
        reporters[user] = []; 
    });

    uniqueReports.forEach(entry => {
        const [reporter, reported] = entry.split(" ");
        reportCounts[reported]++; 
        reporters[reporter].push(reported); 
    });

    const suspended = new Set();
    for (const [user, count] of Object.entries(reportCounts)) {
        if (count >= k) {
            suspended.add(user);
        }
    }

    const mailCounts = id_list.map(user => {
        return reporters[user].filter(reported => suspended.has(reported)).length;
    });

    return mailCounts;
}