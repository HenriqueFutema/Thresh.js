const methodObeservablePersonable = require("../observablePersonable");

methodObeservablePersonable.getObservableFilter(
  ["a", "b", "b", "c", "d", "e"],
  'val => val !== "c"'
);
