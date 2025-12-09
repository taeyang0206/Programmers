function solution(my_string, index_list) {
    var answer = '';

    index_list.forEach(data => {
        answer += `${my_string[data]}`;
    })
    return answer;
}
