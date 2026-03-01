import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Cancel from "@mui/icons-material/Close";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { client, urlFor } from "../sanityClient";
import ContentCard from "../components/common/ContentCard";
import ActionButton from "../components/common/ActionButton";
import { findAPetStyles } from "./FindAPet.styles";

const FindAPet = () => {
  const [pets, setPets] = useState([]);
  const { swipeCardBox, buttonStack } = findAPetStyles;

  useEffect(() => {
    const query = '*[_type == "pet"]';
    client.fetch(query).then((data) => {
      const formattedPets = data.map((p) => ({
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
      setPets(formattedPets);
    });
  }, []);

  const handleAction = (action) => {
    const currentPet = pets[0];

    if (action === "like") {
      saveToFavorites(currentPet);
    }

    setPets((prev) => prev.slice(1));
  };

  const saveToFavorites = (pet) => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("paws_favorites")) || [];

    const isAlreadySaved = existingFavorites.some((fav) => fav.id === pet.id);

    if (!isAlreadySaved) {
      const updatedFavorites = [pet, ...existingFavorites];

      localStorage.setItem("paws_favorites", JSON.stringify(updatedFavorites));

      console.log(`${pet.name} saved to favorites! 🐾`);
    }
  };

  return (
    <>
      <Box sx={swipeCardBox}>
        {pets.length > 0 ? (
          <ContentCard key={pets[0].id} pet={pets[0]} onAction={handleAction} />
        ) : (
          <Typography variant="h6">You've seen all the pets! 🐶</Typography>
        )}
      </Box>

      <Stack
        direction="row"
        spacing={10}
        sx={buttonStack}
        bgcolor="#FEF7FF"
        width="100%"
        justifyContent="center"
        paddingY="24px"
      >
        <ActionButton
          ariaLabel="Pass this pet"
          icon={<Cancel sx={{ fontSize: 60 }} />}
          color="#C14F5A"
          onClick={() => handleAction("goLeft")}
        />
        <ActionButton
          ariaLabel="Like this pet"
          icon={<FavoriteBorder sx={{ fontSize: 60 }} />}
          color="#169453"
          onClick={() => handleAction("like")}
        />
      </Stack>
    </>
  );
};

export default FindAPet;
