import { useState, useEffect } from "react";

const STORAGE_KEY = "paws_favourites";

export function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setFavourites(stored);
  }, []);

  const save = (item) => {
    setFavourites((prev) => {
      if (prev.some((f) => f.id === item.id)) return prev;
      const updated = [item, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const remove = (id) => {
    const updated = favourites.filter((p) => p.id !== id);
    setFavourites(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { favourites, save, remove };
}
