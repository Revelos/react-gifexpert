import { useState } from "react";
//import {AddCategory,GifGrid} from './components'
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (
      categories.filter(
        (cate) => newCategory.toUpperCase() === cate.toUpperCase()
      ).length > 0
    )
      return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => {
        return <GifGrid category={category} key={category} />;
      })}
    </>
  );
}

export default GifExpertApp;
