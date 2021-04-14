import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.jsx';
import ButtonPage from './pages/ButtonPage/ButtonPage.jsx';
import ButtonModalPage from './pages/ButtonModalPage/ButtonModalPage.jsx';
import ImagePage from './pages/ImagePage/ImagePage.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/modal'>
          <ButtonModalPage />
        </Route>
        <Route path='/image'>
          <ImagePage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
