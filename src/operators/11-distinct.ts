import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numbers = of<number | string>(1, "1", 1, 1, 3, 3, 2, 2, 4, 5, 5, 6);

numbers.pipe(distinct()).subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  {
    name: "Megaman",
  },
  {
    name: "Megaman",
  },
  {
    name: "Zero",
  },
  {
    name: "Dr. Willy",
  },
  {
    name: "X",
  },
  {
    name: "X",
  },
  {
    name: "Zero",
  },
];

from<Character[]>(characters)
  .pipe(distinct((characters) => characters.name))
  .subscribe(console.log);
