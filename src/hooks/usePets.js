import { useState, useEffect } from "react";
import { client, urlFor } from "../sanityClient";

export function usePets() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "pet"]';
    client.fetch(query).then((data) => {
      const formattedItems = data.map((p) => ({
        id: p._id,
        type: p.type,
        name: p.name,
        breed: p.breed,
        sex: p.sex,
        age: p.age,
        location: p.location,
        image: urlFor(p.image).url(),
        alt: p.image?.alt || p.name,
        description: p.bio,
      }));
      setItems(formattedItems);
      setLoading(false);
    });
  }, []);

  const nextCard = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(null);
    }
  };

  return {
    items,
    loading,
    currentIndex,
    currentItem: items[currentIndex],
    nextCard,
  };
}
