import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Cancel from "@mui/icons-material/Close";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { client, urlFor } from "../sanityClient";
import ContentCard from "../components/common/ContentCard";
import ActionButton from "../components/common/ActionButton";
import { findAPetStyles } from "./FindAPet.styles";

const FindAPet = () => {
  const [items, setItems] = useState([]);
  const { layout, controls } = findAPetStyles;
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
        alt: p.image.alt,
        description: p.bio,
      }));
      setItems(formattedItems);
    });
  }, []);

  const handleAction = (action) => {
    const currentItem = items[0];

    if (action === "like") {
      saveToFavorites(currentItem);
    }

    setItems((prev) => prev.slice(1));
  };

  const saveToFavorites = (item) => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("paws_favorites")) || [];

    const isAlreadySaved = existingFavorites.some((fav) => fav.id === item.id);

    if (!isAlreadySaved) {
      const updatedFavorites = [item, ...existingFavorites];

      localStorage.setItem("paws_favorites", JSON.stringify(updatedFavorites));

      console.log(`${item.name} saved to favorites! 🐾`);
    }
  };

  return (
    <>
      <Box sx={layout.swipeArea}>
        {items.length > 0 ? (
          <ContentCard
            key={items[0].id}
            item={items[0]}
            onAction={handleAction}
          />
        ) : (
          <Typography variant="h6">You've seen all the pets! 🐶</Typography>
        )}
      </Box>

      <Stack
        direction="row"
        spacing={10}
        sx={controls.buttonStack}
        bgcolor="#FEF7FF"
        width="100%"
        justifyContent="center"
        paddingY="24px"
      >
        <ActionButton
          ariaLabel="Pass this pet"
          icon={<Cancel sx={{ fontSize: 60 }} />}
          color="action.main"
          onClick={() => handleAction("goLeft")}
        />
        <ActionButton
          ariaLabel="Like this pet"
          icon={<FavoriteBorder sx={{ fontSize: 60 }} />}
          color="action.secondary"
          onClick={() => handleAction("like")}
        />
      </Stack>
    </>
  );
};

export default FindAPet;
