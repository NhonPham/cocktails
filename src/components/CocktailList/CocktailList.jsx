import React from "react";
import { useSelector } from "react-redux";
import { getAllCocktails } from "../../redux/cocktailSlice";
import Cocktail from "./Cocktail";
import "./Cocktail.scss";

const CocktailList = () => {
  const data = useSelector(getAllCocktails);

  return (
    <div className="cocktails">
      {Object.keys(data).length === 0 ? (
        <h2 className="details-title">Loading...</h2>
      ) : (
        <>
          {data.drinks?.map((item, index) => (
            <div className="cocktail" key={item.idDrink}>
              <Cocktail item={item} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CocktailList;
