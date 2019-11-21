const createBaseUrl = require("../createBase/createBaseUrl");

const baseUrl = createBaseUrl("https://api.github.com/users?per_page=5");

const methodsObservable = require("../index");

module.exports = baseUrl || "";

methodsObservable.getObservable("https://api.github.com/users?per_page=5");
