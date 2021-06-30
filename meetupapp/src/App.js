import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetup';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/newMeetup" exact>
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
