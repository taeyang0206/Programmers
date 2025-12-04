function solution(arr, queries) {
    var answer = [];
    var tmp = [];

    queries.forEach(([s, e, k], index) => {
        tmp = arr.slice(s, e+1).filter(i => i > k);

        if(tmp.length > 0) {
            answer[index] = Math.min(...tmp);
        }
        else {
            answer[index] = -1;
        }
    })

    return answer;
}