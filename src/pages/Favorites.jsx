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
  Stack,
} from "@mui/material";
import { DeleteOutline, AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteConfirmDialog from "../components/common/DeleteConfirmDialog";
import DescriptionDrawer from "../components/common/DescriptionDrawer";
import { favoritesStyles } from "./Favorites.styles";
import { contentCardStyles } from "../components/common/ContentCard.styles";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemForDrawer, setSelectedItemForDrawer] = useState(null);
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
  const { moreInfoButton } = contentCardStyles;

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
              secondaryAction={null}
              sx={{
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  minWidth: 0,
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    sx={favoriteAvatar}
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="h6" sx={favoriteName} noWrap>
                      {item.name}
                    </Typography>
                  }
                  secondary={
                    <Box component="span" sx={favoriteDescription}>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        noWrap
                      >
                        {item.breed || item.type} • {item.age || "Unknown Age"}
                      </Typography>
                    </Box>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <IconButton
                  onClick={() => setSelectedItemForDrawer(item)}
                  sx={{ p: 1, color: "grey.400" }}
                >
                  <AddCircleOutline />
                </IconButton>

                <IconButton
                  onClick={() => handleClickOpen(item)}
                  sx={{ p: 1, color: "error.main" }}
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
