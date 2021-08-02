import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

// const url = "https://httpbin.org/delay/1";
const url = "https://api.github.com/weusers?per_page=5";

const catchErr = (err: AjaxError) => {
  console.log(err.message);
  return of([]);
};

const obs$ = ajax(url);
const obs2$ = ajax.getJSON(url);

obs$.subscribe(console.log);
obs2$.pipe(
  catchError(catchErr)
).subscribe({
  next: (val) => console.log("val", val),
  error: (err) => console.log(err),
  complete: () => console.log("complete"),
});
