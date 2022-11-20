async function startAsync(age) {
    if (age > 20) return `${age} success`;
    else throw new Error(`${age} is not over 20`);
  }
  
  const promise1 = startAsync(25);
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
  
  const promise2 = startAsync(15);
  promise2
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });