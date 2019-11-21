module.exports = function createBaseUrl(baseUrl = "") {
  if (baseUrl !== "") {
    return baseUrl.toString().toLowerCase();
  }

  return;
};
