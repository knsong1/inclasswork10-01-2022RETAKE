const add = (x, y) => {
    return x + y;
  }
  const sub = (x, y) => {
    return x - y;
  };
  const mul = (x, y) => {
    return x * y;
  };
  const div = (x, y) => {
    return x / y;
}

//these are parameter (four anonymous functions) passed to other functions 
//write function that can accept another function as a parameter/variable

const result = apply(2, 3, add);


console.log(result);

  const apply = (a, b, fn) => { //fn is the name of the parameter within this function
    const val = fn(a, b);
    return val;
  }
