const { ajax } = require("rxjs/ajax");
const { map, catchError } = require("rxjs/operators");
const { of } = require("rxjs");

const createXHR = require("./createBase/createXHR");

const baseUrl = require("./tests/index");

module.exports = {
  getObservable(url, verb = "") {
    if (verb == "") {
      return console.log("Request require a verb");
      console.log(baseUrl);
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
        return userResponse.response;
      }),
      catchError(error => {
        return of(error);
      })
    );

    obs$.subscribe(val => console.log(val));
  },

  getObservableWithTake() {
    return;
  }
};
