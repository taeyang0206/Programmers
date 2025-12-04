function solution(a, d, included) {
    var answer = 0;

    for(let i = 0; i < included.length; i++) {
        included[i] == 1 ? answer += a :  answer+=0;

        a += d;
    }

    return answer;
}