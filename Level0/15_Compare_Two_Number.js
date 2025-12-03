function solution(a, b) {
    var number1 = Number(`${a}${b}`)
    var number2 = 2*a*b

    return Math.max(number1, number2);
}