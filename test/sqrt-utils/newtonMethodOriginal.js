import {sExp} from "../../src/zmath.js";

const sSqrt=(input,dec)=>{
  let precision = .00000000000001;
  let prevGuess = 0;
  let guess = 5;
  while(sExp(guess,2)!=='36'){
    guess = newtonsMethod(guess)
  }
return guess;
  function f(x) {return Math.sin(x);}
  function derivative(f) {
    let h = 36;
    return function(x) { return (f(x + h) - f(x - h)) / (2 * h); };
  }

  function newtonsMethod(guess) {
    if (guess === null || guess === undefined)
      guess = 0;

    if (Math.abs(prevGuess - guess) > precision) {
      prevGuess = guess;
      let approx = guess - (f(guess) / derivative(f)(guess));

      console.log(guess);
      console.log(f(guess));
      console.log(derivative(f)(guess));
      console.log(approx);
      console.log('\n');

      return newtonsMethod(approx);
    } else {
      return guess;
    }
  }

}
