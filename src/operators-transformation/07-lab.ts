import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators";

// helpers
const httpRequest = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    map((response) => response.response.token),
    catchError((err) => of("xxx"))
  );

// elements
const form = document.createElement("form");
const inputMail = document.createElement("input");
const inputPassword = document.createElement("input");
const btnSubmit = document.createElement("button");

// configs
inputMail.type = "email";
inputMail.placeholder = "Email";
inputMail.value = "eve.holt@reqres.in";

inputPassword.type = "password";
inputPassword.placeholder = "Password";
inputPassword.value = "cityslicka";

btnSubmit.innerHTML = "Login";

// append
form.append(inputMail, inputPassword, btnSubmit);
document.querySelector("body").append(form);

const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  //mergeMap(httpRequest)
  //switchMap(httpRequest)
  exhaustMap(httpRequest)
);

submitForm$.subscribe(console.log);
