function solution(a, b, flag) {
    var answer = 0;

    flag == 1 ? answer = a + b : answer = a - b;

    return answer;
}