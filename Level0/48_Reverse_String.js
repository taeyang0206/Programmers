function solution(my_string, s, e) {
    var arr = [...my_string];

    for(let i = 0; i < (e - s)/2; i ++) {
        [arr[s + i], arr[e - i]] = [arr[e - i], arr[s + i]];
    }

    return arr.join('');
}