function solution(code) {
    var answer = '';
    var arr = [...code];
    var mode = 0;

    for(var idx=0; idx < arr.length; idx++) {
        if(arr[idx] == "1") {
            mode == 1 ? mode = 0 : mode = 1;
        }
        else {
            if(mode == 0) {
                if(idx % 2 == 0) {
                    answer += arr[idx];
                }
            }
            else {
                if(idx % 2 == 1) {
                    answer += arr[idx];
                }
            }
        }
    }

    if(answer == '') {
        answer = 'EMPTY';
    }

    return answer;
}