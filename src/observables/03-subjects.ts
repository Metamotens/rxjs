import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("complete"),
};

const interval$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => clearInterval(intervalID);
});

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

//subject$.subscribe((rnd) => console.log("1: ", rnd));
//subject$.subscribe((rnd) => console.log("2: ", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete(); 
  subscription.unsubscribe();
}, 3500);

