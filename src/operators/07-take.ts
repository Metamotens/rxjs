import { of, pipe } from "rxjs";
import { take } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5, 6).pipe(take(3));

numbers$.subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
