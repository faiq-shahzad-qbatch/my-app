import React from "react";
import { Map } from "immutable";

function Practice() {
  let book = Map({ title: "Harry Potter" });

  function publish(book) {
    return book.set("isPublished", true);
  }

  book = publish(book);

  console.log(book.toJS());

  return <div>Practice</div>;
}

export default Practice;
