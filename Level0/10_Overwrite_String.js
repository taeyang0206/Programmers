function solution(my_string, overwrite_string, s) {
    var answer = [...my_string];
    let change = [...overwrite_string];

    for(let i = 0; i < overwrite_string.length; i++) {
        answer[s+i] = change[i];
    }

    return answer.join('');
}