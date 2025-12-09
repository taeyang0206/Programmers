function solution(my_string, is_prefix) {
    var answer = 0;
    my_string.startsWith(is_prefix) ? answer = 1 : answer = 0;
    return answer;
}