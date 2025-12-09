function solution(my_string, m, c) {
    var answer = '';
    var arr = [...my_string];

    for(let i = c - 1; i < my_string.length; i = i + m) {
        answer += my_string[i];
    }

    return answer;
}