import { asyncScheduler } from "rxjs";

const hello = (name) => console.log(`Hola ${name}`);

// asyncScheduler.schedule(hello, 2000, 'Roberto');

const subs = asyncScheduler.schedule(
  function (state) {
    console.log(state);
    this.schedule(state + 1, 1000);
  },
  1000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
