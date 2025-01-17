function foo(a, b) {
  //Convert both arguments to numbers before adding
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)){
    return 'Invalid input'; //Handle cases with non-numeric input 
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo(1, 'a')); // Output: Invalid input