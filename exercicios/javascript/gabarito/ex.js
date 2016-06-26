var a = [1,2,3,4,5,6,7,8,9,10];
console.log('Array original');
console.log(a);

console.log('Multiplicados por 2');
a.forEach(function (n) {
   console.log(n*2);
});

console.log('Quadrados');
var quad = a.map(function (n) {
   return n*n;
});
console.log(quad);

console.log('Ímpares');
var impar = a.filter(function (n) {
   return n % 2 === 1;
});
console.log(impar);

console.log('Soma');
var soma = a.reduce(function (anterior, atual) {
   return anterior + atual;
}, 0);
console.log(soma);

console.log('Soma Pares');
var somaPar = a
.filter(function (n) {
    return n % 2 === 0;
})
.reduce(function (anterior, atual) {
   return anterior + atual;
}, 0);
console.log(somaPar);