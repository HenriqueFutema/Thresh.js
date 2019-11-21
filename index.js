const { ajax } = require("rxjs/ajax");
const { map, catchError } = require("rxjs/operators");
const { of } = require("rxjs");

const createXHR = require("./createXHR");

function getObservable(url, verb = "") {
  if (verb == "") {
    return console.log("Request require a verb");
  }

  verb = verb.toUpperCase();
  const obs$ = ajax({
    createXHR,
    url: `${url}`,
    crossDomain: true,
    withCredentials: false,
    method: verb
  }).pipe(
    map(userResponse => {
      return userResponse;
    }),
    catchError(error => {
      console.log("error: ", error);
      return of(error);
    })
  );

  obs$.subscribe(val => console.log(val));
}

getObservable("https://api.github.com/users?per_page=5", "get");
