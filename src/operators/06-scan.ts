import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalNumbers = (acc, curr) => acc + curr;

from(numbers)
  .pipe(reduce(totalNumbers))
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });

from(numbers)
  .pipe(scan(totalNumbers))
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });

interface User {
  id?: string;
  authenticated?: boolean;
  token?: string;
  age?: number;
}

const users: User[] = [
  { id: "meta", authenticated: false, token: null },
  { id: "meta", authenticated: true, token: "ABC" },
  { id: "meta", authenticated: true, token: "ABC123" },
];

const state$ = from(users).pipe(
  scan<User>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { age: 32 }
  )
);

const ids$ = state$.pipe(map((state) => state.id));

ids$.subscribe(console.log);
