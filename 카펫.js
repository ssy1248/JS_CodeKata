function solution(brown, yellow) {
    var answer = [];
     for (var i = 3; i <= (brown + yellow) / i; i++) {
        var x = Math.floor((brown + yellow) / i);
        if( (x - 2) * (i - 2) === yellow) {
            break;
        }
    }

    return [x,i];
}