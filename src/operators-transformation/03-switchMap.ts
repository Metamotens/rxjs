import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs/operators";
import { GitUser } from "../interfaces/git-user.interface";
import { GitUsers } from "../interfaces/git-users.interface";

const input = document.createElement("input");
const ol = document.createElement("ol");
document.querySelector("body").append(input, ol);

const createUserList = (users: GitUser[]) => {
  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");

    img.src = user.avatar_url;
    a.href = user.html_url;
    a.text = "show page";
    a.target = "_blank";

    li.append(img);
    li.append(user.login + " ");
    li.append(a);
    ol.append(li);
  }
};

//const obs$ = fromEvent<KeyboardEvent>(input, "keyup").pipe(
//  debounceTime(500),
//  map<KeyboardEvent, Observable<GitUsers>>((event) => {
//    const value = event.target["value"];
//    return ajax.getJSON(`http://api.github.com/search/users?q=${value}`);
//  }),
//  mergeAll<GitUsers>(),
//  map<GitUsers, GitUser[]>((val) => val.items)
//);
//.subscribe(createUserList);

const url = "https://httpbin.org/delay/1?arg=";
const obs$ = fromEvent<KeyboardEvent>(input, "keyup")
obs$
  .pipe(
    pluck("target", "value"),
    //mergeMap((val) => ajax.getJSON(url + val))
    switchMap((val) => ajax.getJSON(url + val))
  )
  .subscribe(console.log);
