import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorite-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const total = favoritesCtx.totalFavorites;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="#" to="/">
          MeetUp App
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" href="#" to="/">
                All MeetUps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/newMeetup">
                New MeetUps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/favorites">
                My Favorites <span className="badge rounded-pill bg-dark">{total}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
