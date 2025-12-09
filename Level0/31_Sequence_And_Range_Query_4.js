function solution(arr, queries) {
    var answer = [];
    
    queries.forEach(([s, e, k]) => {
        answer = arr.slice(s, e+1);
        
        for(let i = s; i <= e; i++) {
            if(i % k == 0) {
                arr[i] += 1;   
            }
        }
    })
    
    return arr;
}