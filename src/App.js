import React from "react";
import SearchBar from "./Components/Search/SearchBar";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import Description from "./Components/Description/Description";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <MovieList />
                <AddMovie />
              </>
            )}
          />
          <Route
            exact
            path="/description/:id"
            render={props => <Description {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
