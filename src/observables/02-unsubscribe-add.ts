import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("complete"),
};

const interval$ = new Observable<number>((subs) => {
  let num = 0;

  const interval = setInterval(() => {
    subs.next(++num);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("interval cleared");
  };
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
}, 3000);
