//Q1
function max(iterable, key) {
    var maximum = Number.MIN_VALUE;
    for (var elem in iterable) {
      var new_max = key(elem);
      if (new_max >= maximum) {
        maximum = new_max;
      }
    }
    return maximum;
  }

  //Q2

  const reverser = (elem) => -1*elem;