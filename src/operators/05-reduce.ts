import { from, interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const totalReducer = (acc, curr) => acc + curr;

const numbers = [1, 2, 3, 4, 5];

interval(500).pipe(
  take(5),
  tap(console.log),
  reduce(totalReducer),
  //reduce((acc, curr) => acc + curr)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});
