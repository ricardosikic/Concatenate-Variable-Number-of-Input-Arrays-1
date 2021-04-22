const concat = (...rest) => {
  let newArr = new Array;
  
  rest.map((arr) => {
    arr.map((num) => {
      newArr.push(num);
    })
  });

  return newArr;
}

concat([1, 2, 3], [4, 5], [6, 7]);