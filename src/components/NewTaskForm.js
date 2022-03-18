import React, { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit }) {
  const [text, setDetails] = useState("");
  const [category, setCategorySelected] = useState("Code")

  const categoryOptions = categories.map((category) => {
    return category !== "All" ? <option key={category}>{category}</option> : null
  });
  
  function handleCategorySelection(event){
    //console.log(event.target.value)
    setCategorySelected(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setDetails("");
    setCategorySelected("Code");
  }

  function handleDetails(event){
    //console.log(event.target.value);
    setDetails(event.target.value)
  };

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={text} 
        onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select 
        name="category" 
        value={category}
        onChange={(event) => handleCategorySelection(event)}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
