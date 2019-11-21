const { ajax } = require("rxjs/ajax");
const { map, catchError, take, first, pipe } = require("rxjs/operators");
const { of, from } = require("rxjs");

const createXHR = require("./createBase/createXHR");

module.exports = {
  getObservable(url = "", endPoint = "/", verb = "") {
    if (url === "" || endPoint === "" || verb === "") {
      return console.log("Request require a params url, endPoint, verb");
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

    obs$.subscribe(val => {
      console.log(val);

      return val;
    });
  },

  getObservableWithTake(values = [], numTake = 1) {
    if (values !== []) {
      let source = from(values);

      let val = source.pipe(take(numTake));

      val.subscribe(response => {
        console.log(response);

        return response;
      });
    }
  },

  getObservableFirst(values = []) {
    let source = from(values);

    let val = source.pipe(first());

    val.subscribe(response => {
      console.log(response);

      return response;
    });
  }
};
