function solution(w, h) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); 
    const gcdValue = gcd(w, h);

    const unusableSquares = w + h - gcdValue;

    return w * h - unusableSquares;
}