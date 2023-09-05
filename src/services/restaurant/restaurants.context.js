import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantTransform)
        .then((results) => {
          setRestaurants(results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
          setLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
