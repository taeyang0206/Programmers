function solution(ineq, eq, n, m) {
    var answer = 0;

    if(ineq == '>') {
        if(eq == '=') {
            answer = Number(n >= m);
        }
        else {
            answer = Number(n > m);
        }
    }
    else {
        if(eq == '=') {
            answer = Number(n <= m);
        }
        else {
            answer = Number(n < m);
        }
    }
    return answer;
}