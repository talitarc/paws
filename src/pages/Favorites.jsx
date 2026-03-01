import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { DeleteOutline, ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteConfirmDialog from "../components/common/DeleteConfirmDialog";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("paws_favorites")) || [];
    setFavorites(savedPets);
  }, []);

  const handleClickOpen = (pet) => {
    setSelectedPet(pet);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPet(null);
  };

  const handleConfirmDelete = () => {
    const updated = favorites.filter((p) => p.id !== selectedPet.id);
    setFavorites(updated);
    localStorage.setItem("paws_favorites", JSON.stringify(updated));
    handleClose();
  };

  if (favorites.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 10, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          No favorites yet! 🐾
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          Check Paws'list of furry friends.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          sx={{ bgcolor: "#5F418D", "&:hover": { bgcolor: "#5F418D" } }}
        >
          Find Paws
        </Button>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        My Favorite Paws
      </Typography>

      <List sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
        {favorites.map((pet, index) => (
          <React.Fragment key={pet.id}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleClickOpen(pet)}
                >
                  <DeleteOutline sx={{ color: "#c14f5a" }} />
                </IconButton>
              }
              sx={{ py: 2 }}
            >
              <ListItemAvatar>
                <Avatar
                  src={pet.image}
                  alt={pet.name}
                  sx={{
                    width: 60,
                    height: 60,
                    mr: 2,
                    border: "2px solid #5F418D",
                  }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {pet.name}
                  </Typography>
                }
                secondary={
                  <Box
                    component="span"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {pet.breed || pet.type} • {pet.age || "Unknown Age"}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {pet.location}
                    </Typography>
                  </Box>
                }
              />

              <ChevronRight sx={{ color: "#ccc", ml: 2 }} />
            </ListItem>

            {index < favorites.length - 1 && (
              <Divider variant="middle" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
      <DeleteConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirmDelete}
        name={selectedPet?.name}
      />
    </Container>
  );
};

export default Favorites;
