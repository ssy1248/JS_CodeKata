function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array(bridge_length).fill(0);
    let bridgeWeight = 0;
    
    while(truck_weights.length > 0 || bridgeWeight > 0) {
        answer++;
        
        const leavingTruck = bridge.shift();
        bridgeWeight -= leavingTruck;
        
        if(truck_weights.length > 0) {
            if(bridgeWeight + truck_weights[0] <= weight) {
                const newTruck = truck_weights.shift();
                bridge.push(newTruck);
                bridgeWeight += newTruck;
            } else {
                bridge.push(0);
            }
        } else {
            bridge.push(0);
        }
    }
    
    return answer;
}