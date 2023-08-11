import React from "react";
import { produce } from "immer";

function Immer() {
  const book = { title: "Harry Potter" };

  function publish(book) {
    return produce(book, (draftBook) => {
      draftBook.isPublished = true;
    });
  }

  const publishedBook = publish(book);

  console.log(book);
  console.log(publishedBook);

  return <div>Immer</div>;
}

export default Immer;
