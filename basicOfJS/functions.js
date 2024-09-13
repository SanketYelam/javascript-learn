function OnetoN(n){
    for( let i=0; i<n; i++){
        console.log(i);
    }
}

//OnetoN(12);

function equ(a,b){
    return Math.abs(a*a*a)+Math.abs(b*b*b)
}

console.log(equ(2,3));