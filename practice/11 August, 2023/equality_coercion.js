const a = {
  x: 1,
  valueOf: function () {
    return this.x++;
  },
};

console.log(a == 1 && a == 2 && a == 3);
