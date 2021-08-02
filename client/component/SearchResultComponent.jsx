import React from 'react';
import { useState, useEffect } from "react";

const SearchResultComponent = (props) => {
  // const { foodName, calories, score, carbs, fat, sugar, fiber, sodium } = props.info

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
      <strong className="foodName">Food Name {props.foodName}</strong>
      <div className="rowNutritionInfo1">
        <span className="nutFacts">
          Calories: 300{props.calories ? props.calories : ""}
        </span>
        <span className="nutFacts">
          Nutrition Score: 75{props.score ? props.score : ""}
        </span>
      </div>
      <div className="rowNutritionInfo2">
        <span className="nutFacts">
          Carbohydrates: 90g{props.carbs ? props.carbs : ""}
        </span>
        <span className="nutFacts">
          Protein: 50g{props.protein ? props.protein : ""}
        </span>
        <span className="nutFacts">Fat: 20 {props.fat ? props.fat : ""}</span>
      </div>
      <div className="rowNutritionInfo3">
        <span className="nutFacts">
          Sugar: 6g {props.sugar ? props.sugar : ""}
        </span>
        <span className="nutFacts">
          Fiber: 6g {props.fiber ? props.fiber : ""}
        </span>
        <span className="nutFacts">
          Sodium: 200 {props.sodium ? props.sodium : ""}
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