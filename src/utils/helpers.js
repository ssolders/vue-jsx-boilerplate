// Get url params as an object, each param as property
export function fetchUrlParams (urlQuery) {
  var query = urlQuery
  if(query[0] === "?") {
    query = query.substr(1);
  }

  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

// Get all url-params from fetchUrlParams and then pick the supplied property
export function fetchUrlParamValueByKey (key) {
  return fetchUrlParams(window.location.search)[key]
}
