import { Link } from "react-router-dom";
import "./Cocktail.scss";
const Cocktail = (props) => {
  const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
    props.item;
  return (
    <>
      <img src={strDrinkThumb} alt={strDrink} className="cocktail-image" />
      <div className="cocktail-content">
        <h3 className="cocktail-title">{strDrink}</h3>
        <h4 className="cocktail-glass">{strGlass}</h4>
        <p className="cocktail-info">{strAlcoholic}</p>
        <button className="cocktail-button">
          <Link to={`cocktail/${idDrink}`}>Details</Link>
        </button>
      </div>
    </>
  );
};

export default Cocktail;
