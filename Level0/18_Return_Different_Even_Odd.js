function solution(n) {
    var answer = 0;

    if(n % 2 == 1) {
        for(var i = 1; i < n+1; i+=2) {
            answer += i;
        }
    }
    else {
        for(var i = 0; i < n+1; i+=2) {
            answer += i*i;
        }
    }

    return answer;
}