function solution(my_string, k) {
    var answer = '';

    for(var i = 0; i < k; i ++) {
        answer += my_string;
    }

    return answer;
}

// function solution(my_string, k) {
//     return my_string.repeat(k)
// }