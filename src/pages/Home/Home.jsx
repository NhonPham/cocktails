import CocktailList from "../../components/CocktailList/CocktailList";
import Search from "../../components/Search/Search";
import { useDispatch } from "react-redux";
import { fetchAsyncCocktails } from "../../redux/cocktailSlice";
import { useEffect, useState } from "react";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("d");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCocktails(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <main>
      <Search setSearchTerm={setSearchTerm} />
      <CocktailList />
    </main>
  );
};

export default Home;
