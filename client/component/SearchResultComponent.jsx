import React from 'react';
import { useState, useEffect } from "react";

const SearchResultComponent = (props) => {
  const { product_name, calories, score, carbs, fats, sugar, fiber, sodium, protein } = props.info

  const [itemStatus, setItemStatus] = useState(false);

  // handleClick = () => {
  //   setItemStatus(!itemStatus);
  // };

  // useEffect(() => {
  //   //Push searchcomponent result to SearchContainer when button is clicked and status changes?
  //   return () => {
  //     cleanup;
  //   };
  // }, [itemStatus]);

  return (
    <div className="searchResultContainer">
      <strong className="foodName"> {product_name}</strong>
      <div className="rowNutritionInfo1">
        <span className="nutFacts">
          Calories: {calories ? calories : ""}
        </span>
        <span className="nutFacts">
          Nutrition Score: {score ? score : ""}
        </span>
      </div>
      <div className="rowNutritionInfo2">
        <span className="nutFacts">
          Carbohydrates: {carbs ? carbs : ""}
        </span>
        <span className="nutFacts">
          Protein: {protein ? protein : ""}
        </span>
        <span className="nutFacts">Fat: {fats ? fats : ""}</span>
      </div>
      <div className="rowNutritionInfo3">
        <span className="nutFacts">
          Sugar: {sugar ? sugar : ""}
        </span>
        <span className="nutFacts">
          Fiber: {fiber ? fiber : ""}
        </span>
        <span className="nutFacts">
          Sodium: {sodium ? sodium : ""}
        </span>
      </div>
      <div>
        <button className="addItemBtn" >
          Add Item
        </button>
      </div>
    </div>
  )
}
export default SearchResultComponent;




//carbs
//protein
//fat
//sugar
//calories
//nutrition score
//sodium
//fiber
//saturated fat