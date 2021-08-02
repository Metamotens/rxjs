import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numbers$ = range(1, 5).pipe(
  tap((val) => console.log("antes", val)),
  map((val) => val * 10),
  tap({
    next: (val) => console.log('next', val),
    complete: () => console.log('completado')
  })
);

numbers$.subscribe(val => console.log('val', val));
