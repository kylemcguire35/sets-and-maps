/*
initialize a new Map
result = []
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the result array
return result
*/

function intersection(a, b) {
  const aSet = new Set(a);
  const bSet = new Set(b);
  let result = [];
  aSet.forEach((e) => {
    if (bSet.has(e)) {
      result.push(e);
    }
  });
  return result;
}

module.exports = intersection;
