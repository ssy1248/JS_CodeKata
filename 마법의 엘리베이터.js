function solution(storey) {
    let count = 0; 
    let carry = 0; 

    while (storey > 0) {
        let digit = storey % 10;
        storey = Math.floor(storey / 10); 

        digit += carry;

        if (digit > 5) {
            count += 10 - digit; 
            carry = 1; 
        } else if (digit === 5) {
            if((storey % 10) >= 5) {
                count += 10 - digit;
                carry = 1;
            } else {
                count += digit;
                carry = 0;
            }
        } else {
            count += digit;
            carry = 0;
        }
    }

    if (carry > 0) count += carry;

    return count;
}