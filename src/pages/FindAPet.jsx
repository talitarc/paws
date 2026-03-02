import { Box, Stack, Typography, Skeleton, Alert } from "@mui/material";
import Cancel from "@mui/icons-material/Close";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ContentCard from "../components/common/ContentCard";
import ActionButton from "../components/common/ActionButton";
import { findAPetStyles } from "./FindAPet.styles";
import { usePets } from "../hooks/usePets";
import { useFavorites } from "../hooks/useFavorites";

const FindAPet = () => {
  const { layout, skeleton, controls } = findAPetStyles;
  const { currentItem, loading, error, nextCard } = usePets();
  const { save } = useFavorites();

  const handleAction = (action) => {
    if (action === "like") {
      save(currentItem);
    }
    nextCard();
  };

  if (loading) return <Skeleton variant="rectangular" sx={skeleton} />;

  if (error) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <>
      <Box sx={layout.swipeArea}>
        {currentItem ? (
          <ContentCard
            key={currentItem.id}
            item={currentItem}
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
