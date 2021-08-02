import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const button = document.createElement("button");
button.innerHTML = "Stop Timer";
document.querySelector("body").append(button);

const interval$ = interval(300);
const click$ = fromEvent(button, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1),
  tap(() => console.log("tap después de skip"))
);

interval$.pipe(takeUntil(click$)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
