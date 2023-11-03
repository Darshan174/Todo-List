import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault(); //prevents page from refreshing when u add an input in the box
        if (newItem === "") return
    
       onSubmit(newItem)
        setNewItem(""); //clears the input box once the input is declared to checkbox form
      }

      
      
      return (
      
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem} //here ur tellin that the input remain a empty string as written in line 5, useState("")
            onChange={(e) => setNewItem(e.target.value)} //now ur updating the input with setNewItem and reruns and comes to line 13 to newItem
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      )
}