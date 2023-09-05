import React, { createContext, useState, useEffect, useContext } from "react";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../Infrastructure/Theme/authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);
  const storeFavourite = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await ReactNativeAsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("Error storing", e);
    }
  };

  const getFavourites = async (uid) => {
    try {
      const value = await ReactNativeAsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error loading", e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user) {
      getFavourites(user.user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.user.uid && favourites.length) {
      storeFavourite(favourites, user.user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
