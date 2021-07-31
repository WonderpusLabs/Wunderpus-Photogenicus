import React from 'react';

const SearchResultComponent = (props) => {


  return (
    <div className="searchResultContainer">
      <p className="foodName">Food Name {props.foodName}</p>
      <div className="rowNutritionInfo">
        <span>Calories: {props.calories ? props.calories : ""}</span>
        <span>Nutrition Score: {props.score ? props.score : ""}</span>
      </div>
      <div className="rowNutritionInfo">
        <span>Carbohydrates {props.carbs ? props.carbs : ""}</span>
        <span>Protein {props.protein ? props.protein : ""}</span>
        <span>Fat {props.fat ? props.fat : ""}</span>
      </div>
      <div className="rowNutritionInfo">
        <span>Sugar: {props.sugar ? props.sugar : ""}</span>
        <span>Fiber {props.fiber ? props.fiber : ""}</span>
        <span>Sodium {props.sodium ? props.sodium : ""}</span>
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