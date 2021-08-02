import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";

const url = "https://api.github.com/usesdsrs?per_page=5";

const catchErrorFetch = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const catchErrorAjax = (err: AjaxError) => {
  console.warn(err.message);
  return of([]);
};

// const fetchh = fetch(url)
//   .then(catchErrorFetch)
//   .then((res) => res.json())
//   .then((data) => console.log("data", data))
//   .catch((err) => console.warn("error", err));

ajax(url)
  .pipe(
    map((res) => res.response),
    catchError(catchErrorAjax)
  )
  .subscribe((users) => console.log("users", users));
