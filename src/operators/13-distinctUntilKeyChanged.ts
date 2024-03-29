import { from, of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
  .pipe(distinctUntilKeyChanged("name"))
  .subscribe(console.log);
