function solution(my_string, n) {
    var answer = '';
    var length = my_string.length;

    answer = my_string.slice(length - n, length);
    return answer;
}