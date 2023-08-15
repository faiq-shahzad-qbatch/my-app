import React, { useState } from "react";
// import { useEffect } from "react";
import useDebouceEffect from "./useDebounceEffect";
import axios from "axios";
import ReactJson from "react-json-view";

function UseDebounceEffectExample() {
  const [searchItem, setSearchItem] = useState("todos");
  const [data, setData] = useState({});

  useDebouceEffect(
    () => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/${searchItem}/1`,
          );

          console.log(data);
          setData(data);
        } catch (error) {
          console.error(error);
        }
      })();
    },
    [searchItem],
    1000,
  );

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://jsonplaceholder.typicode.com/${searchItem}/1`,
  //         );

  //         console.log(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }, [searchItem]);

  return (
    <>
      <label>Search: </label>
      <input
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <ul>
        {Object.entries(data).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul> */}
      <ReactJson style={{ margin: "20px" }} src={data} theme="hopscotch" />
    </>
  );
}

export default UseDebounceEffectExample;
