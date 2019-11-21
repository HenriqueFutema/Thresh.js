const { ajax } = require("rxjs/ajax");
const {
  map,
  catchError,
  take,
  first,
  last,
  distinct,
  mergeAll,
  pipe
} = require("rxjs/operators");
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
  },

  getObservableLast(values = []) {
    let source = from(values);

    let val = source.pipe(last());

    val.subscribe(response => {
      console.log(response);

      return response;
    });
  },

  getObservableDistinct(values = []) {
    let source = from(values);

    let val = source.pipe(distinct());

    val.subscribe(response => {
      console.log(response);

      return response;
    });
  },

  getObservableMerge(...args) {
    const arraysToMerge = [];
    const finalArray = [];

    for (let i = 0; i < args.length; i++) {
      arraysToMerge[i] = args[i];
    }

    const arrays = from(arraysToMerge);

    const arrayMerge = arrays.pipe(mergeAll(arrays));

    arrayMerge.subscribe(val => finalArray.push(val));
    console.log(finalArray);

    return finalArray;
  }
};
