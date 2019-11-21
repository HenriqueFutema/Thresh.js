const { ajax } = require("rxjs/ajax");
const { map, catchError } = require("rxjs/operators");
const { of } = require("rxjs");

const createXHR = require("./createBase/createXHR");

module.exports = {
  getObservable(url = "", endPoint = "/", verb = "") {
    if (verb == "") {
      return console.log("Request require a verb");
    }

    verb = verb.toUpperCase();
    const obs$ = ajax({
      createXHR,
      url: `${url}${endPoint}`,
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
