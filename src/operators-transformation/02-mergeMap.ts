import { fromEvent, interval, of } from "rxjs";
import { map, mergeAll, mergeMap, take, takeUntil } from "rxjs/operators";

const letters = of("a", "b", "c");

letters
  .pipe(
    mergeMap((letter) =>
      interval(1000).pipe(
        map((i) => letter + i),
        take(3)
      )
    )
  )
  .subscribe(console.log);

const mousedown$ = fromEvent(document, "mousedown");
const mouseup$ = fromEvent(document, "mouseup");
const interval$ = interval();

mousedown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseup$)
  ))
).subscribe(console.log)
