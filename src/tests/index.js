const createBaseUrl = require("../createBase/createBaseUrl");

const baseUrl = createBaseUrl();

const methodsObservable = require("../index");

methodsObservable.getObservable(
  baseUrl || "https://api.github.com/",
  "users?per_page=5",
  "get"
);
