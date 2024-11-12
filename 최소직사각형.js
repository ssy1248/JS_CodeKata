function solution(sizes) {
    let h = 0;
    let w = 0;
    
    sizes.forEach(s => {
        const [a, b] = s.sort((a, b) => a - b);
        if(a > h)
            h = a;
        if(b > w)
            w = b;
    });
    return h * w;
}