function solution(a, b) {
    var answer = 0;

    if(Number(`${a}${b}`) > Number(`${b}${a}`)) {
        answer = Number(`${a}${b}`);
    }
    else {
        answer = Number(`${b}${a}`);
    }
    return answer;
}

// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }