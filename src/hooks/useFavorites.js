import { useState, useEffect } from "react";

const STORAGE_KEY = "paws_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setFavorites(stored);
  }, []);

  const save = (item) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === item.id)) return prev;
      const updated = [item, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const remove = (id) => {
    const updated = favorites.filter((p) => p.id !== id);
    setFavorites(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { favorites, save, remove };
}
