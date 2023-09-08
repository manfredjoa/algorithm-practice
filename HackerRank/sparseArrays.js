// Problem
// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings.
// Return an array of the results.

function matchingStrings(strings, queries) {
  const results = [];

  queries.forEach((query) => {
    let matches = strings.filter((string) => string === query);
    results.push(matches.length);
  });

  return results;
}
