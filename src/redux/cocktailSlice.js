import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cocktailApi from "../apis/cocktailApi";

export const fetchAsyncCocktails = createAsyncThunk(
  "cocktails/fetchAsyncCocktails",
  async (term) => {
    const response = await cocktailApi
      .get(`api/json/v1/1/search.php?s=${term}`)
      .catch((err) => {
        console.log("Err:", err);
      });

    return response.data;
  }
);

export const fetchAsyncCocktailId = createAsyncThunk(
  "cocktails/fetchAsyncCocktailId",
  async (id) => {
    const response = await cocktailApi
      .get(`api/json/v1/1/lookup.php?i=${id}`)
      .catch((err) => {
        console.log("Err:", err);
      });
    let newCocktail = {};
    if (response.data.drinks) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = response.data.drinks[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
    }
    return newCocktail;
  }
);

const initialState = {
  cocktails: [],
  selectCocktail: [],
};
const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCocktails.pending, (state, action) => {
        console.log("Data pending!!!");
      })
      .addCase(fetchAsyncCocktails.fulfilled, (state, { payload }) => {
        console.log("Fetched data success!!!");
        return { ...state, cocktails: payload };
      })
      .addCase(fetchAsyncCocktails.rejected, (state, action) => {
        console.log("Rejected!!!");
      });
    builder.addCase(fetchAsyncCocktailId.fulfilled, (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectCocktail: payload };
    });
  },
});
export const getAllCocktails = (state) => state.cocktails.cocktails;
export const getSelectedCocktail = (state) => state.cocktails.selectCocktail;
export default cocktailSlice.reducer;
