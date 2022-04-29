import { useEffect, useRef } from "react";
import "./Search.scss";

const Search = (props) => {
  const { setSearchTerm } = props;
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputOnchange = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form className=" form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={handleInputOnchange}
          />
        </div>
      </form>
    </section>
  );
};
export default Search;
