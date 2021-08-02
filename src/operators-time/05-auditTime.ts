import { fromEvent, interval } from "rxjs";
import { auditTime, map, sample, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    tap((val) => console.log("tap", val)),
    auditTime(3000)
  )
  .subscribe(console.log);
