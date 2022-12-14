import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("")
  const filteredItems = items.filter(item => item.category.includes(filterBy))
  const filteredItemsToDisplay = filteredItems.map((item) => (
    <Item key = {item.id} {...item} />
  ))

  function handleFilterChange(e){
    setFilterBy(e.target.value)
   
  }
  console.log(filterBy)

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleFilterChange}>
          <option value="">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItemsToDisplay}
      </ul>
    </div>
  );
}

export default ShoppingList;
