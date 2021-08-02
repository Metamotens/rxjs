import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

range(1, 5)
  .pipe(map((val) => val * 10))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.subscribe(({ code }) =>
  console.log("desestructuracion", code)
);

const keyupCode2$ = keyup$
  .pipe(map((val) => val.code))
  .subscribe((val) => console.log("map", val));

const keyupPluck$ = keyup$
  .pipe(pluck("target", "baseURI"))
  .subscribe((val) => console.log("pluck", val));

const keyupMapTo$ = keyup$
  .pipe(mapTo("Tecla seleccionada"))
  .subscribe(console.log);
