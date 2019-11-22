const safeEval = require("safe-eval");

const { ajax } = require("rxjs/ajax");
const { skipWhile, filter } = require("rxjs/operators");
const { of, from } = require("rxjs");

module.exports = {
  getObservableFilter(values = [], params = {}) {
    const observableValue = from(values);

    observableValue.pipe(filter(safeEval(params))).subscribe(val => {
      console.log(val);
      return val;
    });
  },

  getObservableFilter
};
