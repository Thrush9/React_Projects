import { useContext } from 'react';
import FavoritesContext from '../../store/favorite-context';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite(props.meetup);
    }
  }

  return (
    <div className="col-md-6 my-2">
      <div className="card rounded-4 h-100 w-100">
        <img src={props.meetup.image} className="card-img-top" alt={props.meetup.title} />
        <div className="card-body">
          <h4 className="card-title">{props.meetup.title}</h4>
          <p className="lead">{props.meetup.address}</p>
          <p className="card-text">{props.meetup.description}</p>
          <div className="text-end">
            <button className={itemIsFavorite ? 'btn btn-danger' : 'btn btn-primary'} onClick={toggleFavoriteHandler}>
              {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetupItem;
