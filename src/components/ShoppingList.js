import React from "react";
import Item from "./Item.js";
import Filter from "./Filter"


function ShoppingList({ items, selectedCategory, onCategoryChange }) {

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
      <Filter onCategoryChange={onCategoryChange}/>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
