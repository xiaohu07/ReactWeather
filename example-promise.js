/**
 * Created by mhu on 10/11/2016.
 */



add = (a, b) => a+b;
console.log(add(3, 44));

/*
function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (!isNaN(a) && !isNaN(b)) {
      resolve(a+b);
    } else {
      reject('Not number!');
    }
  });
  
}

addPromise(12, 'a').then((result) => {
  console.log('success', result);
}, (err) => {
  console.log('error', err);
});*/
