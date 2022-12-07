// Create symbols
const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('bar');

// Print symbols (use the description that was specified when calling Symbol function)
console.log(sym1);  // Symbol()
console.log(sym2);  // Symbol(foo)
console.log(sym3);  // Symbol(bar)

// Check type of symbol
console.log(typeof sym1);  // symbol
console.log(typeof sym2);  // symbol
console.log(typeof sym3);  // symbol