import { useContext } from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  const favorites = favoritesCtx.favorites;
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites. Start adding some!</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }

  return <div className="container p-4">{content}</div>;
}

export default FavoritesPage;
