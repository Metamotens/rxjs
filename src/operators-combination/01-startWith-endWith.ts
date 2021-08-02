import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

const numbers = of(1, 2, 3);

numbers
  .pipe(startWith("a", "b", "c"), endWith("a", "b", "c"))
  .subscribe(console.log);
