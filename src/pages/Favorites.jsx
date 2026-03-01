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
import { DeleteOutline, AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteConfirmDialog from "../components/common/DeleteConfirmDialog";
import DescriptionDrawer from "../components/common/DescriptionDrawer";
import { favoritesStyles } from "./Favorites.styles";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemForDrawer, setSelectedItemForDrawer] = useState(null);
  const { emptyState, layout, list, item } = favoritesStyles;

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
      <Box sx={emptyState.container}>
        <Typography variant="h4" gutterBottom>
          No favorites yet! 🐾
        </Typography>
        <Typography variant="body1" sx={emptyState.message}>
          Check Paws' list of furry friends.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          sx={emptyState.actionButton}
        >
          Find Paws
        </Button>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={layout.container}>
      <Typography variant="h5" sx={layout.title}>
        My Favorite Paws
      </Typography>

      <List sx={list.container}>
        {favorites.map((pet, index) => (
          <React.Fragment key={pet.id}>
            <ListItem secondaryAction={null} sx={item.root}>
              <Box sx={item.content}>
                <ListItemAvatar>
                  <Avatar src={pet.image} alt={pet.name} sx={item.avatar} />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="h6" sx={item.name} noWrap>
                      {pet.name}
                    </Typography>
                  }
                  secondary={
                    <Box component="span" sx={item.description}>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        noWrap
                      >
                        {pet.breed || pet.type} • {pet.age || "Unknown Age"}
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              <Box sx={item.buttonGroup}>
                <IconButton
                  onClick={() => setSelectedItemForDrawer(pet)}
                  sx={item.moreInfoIcon}
                >
                  <AddCircleOutline />
                </IconButton>

                <IconButton
                  onClick={() => handleClickOpen(pet)}
                  sx={item.deleteIcon}
                >
                  <DeleteOutline />
                </IconButton>
              </Box>
            </ListItem>

            {index < favorites.length - 1 && (
              <Divider variant="middle" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>

      <DescriptionDrawer
        open={Boolean(selectedItemForDrawer)}
        onOpen={() => {}}
        onClose={() => setSelectedItemForDrawer(null)}
        item={selectedItemForDrawer}
      />

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
