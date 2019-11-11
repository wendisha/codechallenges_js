//turn string into an array
//sort array from shortest to longest
//grab first element and return its lenght

function findShort(s){
    let array = [];
    array = s.split(" ").sort(function(a, b){return a.length - b.length});
    return array[0].length;
  }