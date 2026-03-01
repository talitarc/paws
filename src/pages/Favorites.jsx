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
import { favoritesStyles } from "./Favorites.styles";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const {
    emptyListBox,
    emptyListMessage,
    findAnItemButton,
    favoritesBox,
    favoriteTitle,
    favoritesList,
    deleteFavorite,
    favoriteAvatar,
    favoriteName,
    favoriteDescription,
    favoriteMoreInfo,
  } = favoritesStyles;

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("paws_favorites")) || [];
    setFavorites(savedItems);
  }, []);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = () => {
    const updated = favorites.filter((p) => p.id !== selectedItem.id);
    setFavorites(updated);
    localStorage.setItem("paws_favorites", JSON.stringify(updated));
    handleClose();
  };

  if (favorites.length === 0) {
    return (
      <Box sx={emptyListBox}>
        <Typography variant="h4" gutterBottom>
          No favorites yet! 🐾
        </Typography>
        <Typography variant="body1" sx={emptyListMessage}>
          Check Paws'list of furry friends.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          sx={findAnItemButton}
        >
          Find Paws
        </Button>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={favoritesBox}>
      <Typography variant="h5" sx={favoriteTitle}>
        My Favorite Paws
      </Typography>

      <List sx={favoritesList}>
        {favorites.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleClickOpen(item)}
                >
                  <DeleteOutline sx={deleteFavorite} />
                </IconButton>
              }
              sx={{ py: 2 }}
            >
              <ListItemAvatar>
                <Avatar src={item.image} alt={item.name} sx={favoriteAvatar} />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography variant="h6" sx={favoriteName}>
                    {item.name}
                  </Typography>
                }
                secondary={
                  <Box component="span" sx={favoriteDescription}>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.breed || item.type} • {item.age || "Unknown Age"}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.location}
                    </Typography>
                  </Box>
                }
              />

              <ChevronRight sx={favoriteMoreInfo} />
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
        name={selectedItem?.name}
      />
    </Container>
  );
};

export default Favorites;
