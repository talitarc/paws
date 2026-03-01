export const favoritesStyles = {
  emptyListBox: { textAlign: "center", mt: 10, px: 2 },
  emptyListMessage: { mb: 4, color: "text.secondary" },
  findAnItemButton: {
    backgroundColor: "primary.main",
    "&:hover": { backgroundColor: "primary.main" },
  },
  favoritesBox: { py: 4 },
  favoriteTitle: {
    mb: 3,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  favoritesList: {
    backgroundColor: "background.paper",
    borderRadius: 2,
    boxShadow: 1,
  },
  deleteFavorite: { color: "action.main" },
  favoriteAvatar: {
    width: 60,
    height: 60,
    mr: 2,
    border: "2px solid",
    borderColor: "primary.main",
  },
  favoriteName: { fontWeight: "600" },
  favoriteDescription: { display: "flex", flexDirection: "column" },
  favoriteMoreInfo: { color: "#ccc", ml: 2 },
};
