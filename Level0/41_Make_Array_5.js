function solution(intStrs, k, s, l) {
    var answer = [];
    var str = '';

    intStrs.forEach(data => {
        str = data.substring(s, s + l);
        if(Number(str) > k ) { answer.push(Number(str)) }
    })

    return answer;
}