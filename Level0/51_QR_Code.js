function solution(q, r, code) {
    var answer = '';
    var arr = [...code];

    arr.forEach((data, index) => {
        if(index % q === r) {
            answer += arr[index];
        }
    })

    return answer;
}