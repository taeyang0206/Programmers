function solution(num_list) {
    var answer = 0;
    var sum = 0;
    var mul = 1;

    for(let i = 0; i < num_list.length; i++) {
        sum = sum + num_list[i];
        mul = mul * num_list[i];
    }

    if(mul > Math.pow(sum, 2)) {
        answer = 0;
    }
    else {
        answer = 1;
    }

    return answer;
}