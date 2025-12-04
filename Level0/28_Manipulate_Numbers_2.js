function solution(numLog) {
    var answer = '';
    const obj = {
        "1" : "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a"
    }

    for(let i = 1; i < numLog.length; i++) {
        answer += obj[`${numLog[i] - numLog[i-1]}`];
    }

    return answer;
}