import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchAsyncCocktailId,
  getSelectedCocktail,
} from "../../redux/cocktailSlice";
import "./CocktailDetails.scss";

const CocktailDetails = () => {
  const { id } = useParams();
  const data = useSelector(getSelectedCocktail);
  const { name, image, info, category, glass, instructions, ingredients } =
    data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCocktailId(id));
  }, [dispatch, id]);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <h2 className="details-title">Loading...</h2>
      ) : (
        <section className="section cocktail-section">
          <div className="details-title">
            {name}
            <div>
              <Link to="/" className="btn btn-primary">
                back home
              </Link>
            </div>
          </div>

          <div className="details">
            <img src={image} alt={name} className="details-image" />

            <div className="details-info">
              <div>
                <span>category:</span>
                <span>{category}</span>
              </div>
              <div>
                <span>info:</span>
                <span>{info}</span>
              </div>
              <div>
                <span>glass:</span>
                <span>{glass}</span>
              </div>
              <div>
                <span>instructions:</span>
                <span>{instructions}</span>
              </div>
              <div>
                <span>ingredients:</span>

                {ingredients.map((item, index) => {
                  return item ? <span key={index}>{item}, </span> : null;
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CocktailDetails;
