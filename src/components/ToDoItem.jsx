import React, { useState } from "react";

function ToDoItem(props) {
  // const [indicator, setIndicator] = useState(false);

  // function handleClick() {
  // setIndicator(prevValue => {
  //   return !prevValue;
  // });
  //}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id); //this is called only if you click on the div.
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}
export default ToDoItem;
