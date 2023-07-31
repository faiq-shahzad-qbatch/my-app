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

function getCityNames(data) {
  // const cities = [];

  // for (let person of data) {
  //   const { addresses } = person;

  //   for (let address of addresses) {
  //     const { city } = address;
  //     cities.push(city);
  //   }
  // }

  return (cities = data.reduce((allCities, { addresses }) => {
    addresses.map(({ city }) => {
      allCities.push(city);
    });
    return allCities;
  }, []));
}

console.log(getCityNames(data));
