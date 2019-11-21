const createBaseUrl = require("../createBase/createBaseUrl");

const baseUrl = createBaseUrl("https://api.github.com/");

const methodsObservable = require("../index");

methodsObservable.getObservable(
  baseUrl || "https://api.github.com/",
  "users?per_page=5",
  "get"
);

methodsObservable.getObservableWithTake(["a", "b", "c", "d", "e"], 2);

methodsObservable.getObservableFirst(["a", "b", "c", "d", "e"]);
methodsObservable.getObservableLast(["a", "b", "c", "d", "e"]);
