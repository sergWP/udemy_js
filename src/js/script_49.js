const log = function (a, b, ...rest) {
    console.log(a, b, rest)
}

log('basic', 'rest', 'operator', 99, [0,1,2]);

function calcOrDouble(a, b = 3) {
    console.log(a*b)
}

calcOrDouble(5, 6);