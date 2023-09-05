import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLoading(false);
        setLocation(result);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ loading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
