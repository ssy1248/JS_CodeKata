function timeToMinutes(time) {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
}

function calculateFee(totalTime, fees) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    
    if(totalTime <= basicTime) {
        return basicFee;
    } else {
        return basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee;   
    }
}
 
function solution(fees, records) {
    const parkingTimes = {};
    const inRecords = {};
    
    for(const record of records) {
        const [time, carNumber, action] = record.split(" ");
        const minutes = timeToMinutes(time);
        
        if(action === "IN") {
            inRecords[carNumber] = minutes;
        } else {
            const inTime = inRecords[carNumber];
            const parkingTime = minutes - inTime;
            
            parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkingTime;
            
            delete inRecords[carNumber];
        }
    }
    
    for(const carNumber in inRecords) {
        const inTime = inRecords[carNumber];
        const parkingTime = timeToMinutes("23:59") - inTime;
        
        parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkingTime;
    }
    
    const feesList = Object.entries(parkingTimes).map(([carNumber, totalTime]) => [carNumber, calculateFee(totalTime, fees)]);
    
    feesList.sort((a, b) => a[0] - b[0]);
    
    return feesList.map(([carNumber, fee]) => fee);
}