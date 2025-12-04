function solution(num_list) {
    var odd = 0;
    var even = 0;

    for(let i = 0; i < num_list.length; i ++) {
        num_list[i] % 2 == 0 ? even = `${even}${num_list[i]}` : odd = `${odd}${num_list[i]}`;
    }

    return Number(odd) + Number(even);
}