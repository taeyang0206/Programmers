function solution(a, b, c) {
    var answer = 0;

    if(a == b && b == c) {
        answer = (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    }
    else if(a != b && b != c && a != c) {
        answer = a + b + c;
    }
    else {
        answer = (a + b + c) * (a*a + b*b + c*c);
    }

    return answer;
}

// Set을 활용하면, 중복된 것을 제거한 배열을 얻을 수 있음. -> Set : 중복된 값을 제거