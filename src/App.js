import React, { useEffect, useReducer } from "react";
import CardList from "./components/card-list";
import Input from "./components/input";
import Loader from "./components/loader";
import "./index.css";
import { initialState, reducer } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, searchText, loading, total } = state;

  useEffect(() => {
    const getRepos = async () => {
      if (!searchText) {
        return;
      }
      try {
        const data = await fetch(
          `https://api.github.com/search/repositories?q=${searchText}&sort=stars&order=desc&per_page=100`
        );
        const response = await data.json();
        dispatch({
          type: "SET_DATA",
          payload: response,
        });
      } catch (error) {
        dispatch({ type: "DEFAULT" });
        console.log("something went wrong", error);
      }
    };
    getRepos();
  }, [searchText]);

  return (
    <div>
      {loading && <Loader />}
      <Input dispatch={dispatch} />
      {searchText && !loading && (
        <p>
          Showing 1-{total <= 100 ? total : 100} of {total} results
        </p>
      )}
      {searchText && <CardList list={data} loading={loading} />}
    </div>
  );
};

export default App;
