import { from } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const iterable = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
};

from(iterable()).subscribe(observer);

// const obs$ = of(...[1, 2, 3, 4, 5, 6]);
// const obs$ = from([1, 2, 3, 4, 5, 6]);
const obs$ = from(fetch("https://api.github.com/users/klerith"));

obs$.subscribe(async (resp) => {
  const data = await resp.json();
  console.log(data);
});
