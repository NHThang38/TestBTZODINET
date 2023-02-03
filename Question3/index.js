function s(a, b) {
    let x = 0;
    for (let i =a; i <=b; i++) {
        x = x + i;
    }
    return x;
    
}

function calc(a,b,c) {
    let res = s(a,b);
    if(c == true) {
        res = res * 2;
    }
    return res;
}

