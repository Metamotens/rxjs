import { asyncScheduler, of, range } from "rxjs";

//const src$ = of<number>(1, 2, 3, 4, 5);
//const src$ = range(1,5, asyncScheduler); // sincrono
const src$ = range(1, 5, asyncScheduler); // asincrono

console.log("inicio");
src$.subscribe((num) => console.log(num));
console.log("fin");
