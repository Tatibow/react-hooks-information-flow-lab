import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import {items} from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode}  onDarkModeClick={onDarkModeClick}/>
      <ShoppingList selectedCategory={selectedCategory}  onCategoryChange={handleCategoryChange} items={items} />
    </div>
  );
}

export default App;
