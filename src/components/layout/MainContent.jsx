import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Cancel from "@mui/icons-material/Close";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { client, urlFor } from "../../sanityClient";
import ContentCard from "../common/ContentCard";
import ActionButton from "../common/ActionButton";
import { mainContentStyles } from "./MainContent.styles";

const MainContent = () => {
  const [pets, setPets] = useState([]);
  const { mainContentBox, swipeCardBox, buttonStack } = mainContentStyles;

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

  const handleAction = (direction) => {
    setPets((prev) => prev.slice(1));
    console.log(`Action: ${direction}`);
  };

  return (
    <Box sx={mainContentBox}>
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
          onClick={() => handleAction("left")}
        />
        <ActionButton
          ariaLabel="Like this pet"
          icon={<FavoriteBorder sx={{ fontSize: 60 }} />}
          color="#169453"
          onClick={() => handleAction("right")}
        />
      </Stack>
    </Box>
  );
};

export default MainContent;
