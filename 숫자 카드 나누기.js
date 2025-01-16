function solution(arrayA, arrayB) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    const getGCD = (array) => array.reduce((acc, cur) => gcd(acc, cur));

    const canDivideAll = (num, array) => array.every(el => el % num === 0);

    const cannotDivideAny = (num, array) => array.every(el => el % num !== 0);

    const gcdA = getGCD(arrayA); 
    const gcdB = getGCD(arrayB); 

    let maxX = 0;

    if (cannotDivideAny(gcdA, arrayB)) {
        maxX = Math.max(maxX, gcdA);
    }

    if (cannotDivideAny(gcdB, arrayA)) {
        maxX = Math.max(maxX, gcdB);
    }

    return maxX;
}