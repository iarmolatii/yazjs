/*

function makeCounter2(count = 0) {
  return {
    previous:undefined,
    increment() {
        this.previous = count;
        count++
    },

   get current() {
      return count
    },

    setCounterTo (newValue) {
      count = newValue;

    },
    reset() {
        count = this.previous;
    },
  }
}

let counter2 = makeCounter2(5);

console.log(counter2.current)
counter2.increment(); // 6
console.log(counter2.current)

counter2.setCounterTo(counter2.current + 5); // 11
console.log(counter2.current)

counter2.reset();
console.log(counter2.current) // 5;

*/

/*

function makeArmy(number) {
  let i = 0;
  const shooters = [];

  do {
    const shooterNumber = i;
    const shooter = function() {
      // return `It's a shooter #${shooterNumber}. I'm shooting!`;
      return "It's a shooter #" + shooterNumber + ". I'm shooting!";
    }
    shooters.push(shooter)

    i += 1;
  } while ( i < number)

  return shooters;
}

const myArmy = makeArmy(10);

const shooter5 = myArmy[5];
console.log(myArmy[0]());
console.log(shooter5());



*/
