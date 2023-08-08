import React, { useMemo, useState } from "react";

function UseMemoExample() {
  console.log("Component Rerendered!");

  const [name, setName] = useState("Faiq");
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return data.reduce((acc, value) => acc + value, 0);
  }, [data]);

  function addNewNumberToData() {
    setData([...data, 6]);
  }

  function changeName() {
    setName("Abdullah");
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <button onClick={changeName}>Change Name</button>
      <h1>Sum: {sum}</h1>
      <button onClick={addNewNumberToData}>Add New Value To Data</button>
    </>
  );
}

export default UseMemoExample;
