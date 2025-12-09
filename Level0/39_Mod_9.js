function solution(number) {
    var tmp = 0;
    var arr = [...number];

    arr.forEach(data => tmp += Number(data));

    return tmp % 9;
}