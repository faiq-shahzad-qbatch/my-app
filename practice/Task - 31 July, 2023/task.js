// 1- Get city names via destructuring:

const data = [
  {
    name: "john",
    age: 28,
    addresses: [
      {
        st: "hebrew 01 pallmal square",
        city: "New York",
      },
      {
        st: "state 01 jumeira",
        city: "Dubai",
      },
    ],
  },
  {
    name: "jacob",
    age: 30,
    addresses: [
      {
        st: "st 10 H20",
        city: "Islamabad",
      },
      {
        st: "st 05 EZ Road",
        city: "Old London",
      },
    ],
  },
];

function getCityNames(array) {
  const cities = [];

  const [var1] = data;
  const { addresses } = var1;
  const [var2, var3] = addresses;
  var { city } = var2;
  cities.push(city);
  var { city } = var3;
  cities.push(city);

  return cities;
}

console.log(getCityNames(data));
