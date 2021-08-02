import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax
  .post(
    url,
    {
      id: 1,
      name: "Meta",
    },
    {
      "Content-Type": "application/json",
      token: "ABC123",
    }
  )
  .subscribe(console.log);

ajax
  .put(
    url,
    {
      id: 1,
      name: "Meta",
    },
    {
      "Content-Type": "application/json",
      token: "ABC123",
    }
  )
  .subscribe(console.log);

ajax({
  url,
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    token: "ABC123",
  },
  body: {
    id: 1,
    name: "Meta",
  },
}).subscribe(console.log);
