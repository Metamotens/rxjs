import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const GIT_API_URL = "https://api.github.com/users";
const GIT_USER = "metamotens";

forkJoin({
  user: ajax.getJSON(`${GIT_API_URL}/${GIT_USER}`),
  repos: ajax
    .getJSON(`${GIT_API_URL}/${GIT_USER}/repos`)
    .pipe(catchError(() => of([]))),
  gists: ajax.getJSON(`${GIT_API_URL}/${GIT_USER}/gists`),
})
  .pipe(catchError((err) => of(err)))
  .subscribe(console.log);
