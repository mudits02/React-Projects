var a = 100;
console.log(a); // prints 100

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //prints 10
    console.log(b); // This will print
    console.log(c); // This will print
}

console.log(a); // Prints 10 coz it got shadowed by the block var a
console.log(b); // They will throw reference error
console.log(c); // Even this , reference error.
var a = 20;

console.log(a);