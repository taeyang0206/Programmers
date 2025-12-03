function solution(str1, str2) {
    var answer = [];
    var arr_str1 = [...str1];
    var arr_str2 = [...str2];
    
    arr_str1.map((x, index) => answer += x+arr_str2[index])
    
    return answer;
}