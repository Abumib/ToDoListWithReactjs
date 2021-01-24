import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
function App() {
  const [inputText, setInputText] = useState(""); // saves the item typed in the text box into a variable
  const [items, setItems] = useState([]); //saves the items into array

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      //console.log(prevItems);
      return prevItems.filter((item, index) => {
        //same as filter(function(item, indexOFItem){};
        //this will return everything in the array except the the with the id selected
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((
            todoItem,
            index //index returns the index position of the data in the items array
          ) => (
            <ToDoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
              // props.id is passsed into the deleteItem() parameter
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
