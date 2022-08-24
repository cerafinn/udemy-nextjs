import { createContext, useState } from 'react';

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupdId) => {},
  itemIsFavorite: (meetupId) => {},
});

function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length
  };

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    })
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return previousUserFavourites.filter(meetup => meetup.id !== meetupId);
    })
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some(meetup => meetup.id === meetupId);
  }


  return <FavouritesContext.Provider value={context}>;
    {props.children}
  </FavouritesContext.Provider>
}