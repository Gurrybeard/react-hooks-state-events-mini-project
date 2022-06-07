import React from "react";


function CategoryFilter({cat,onSelect, selected}) {
 const cats = cat.map((e)=>{
   const className = e=== selected ? "selected":null;
    return <button className={className} onClick={()=>onSelect(cat)} key={e}>{e}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      cats        
      }
     
    </div>
  );
}

export default CategoryFilter;
