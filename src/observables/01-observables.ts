import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.log('error:', error),
    complete: () => console.log('complete')
}

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");
  subs.complete();
});

obs$.subscribe(observer);
