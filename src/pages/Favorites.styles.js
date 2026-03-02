export const favoritesStyles = {
  emptyState: {
    container: { textAlign: "center", marginTop: 10, paddingX: 2 },
    message: { marginBottom: 4, color: "text.secondary" },
    actionButton: {
      backgroundColor: "primary.main",
      "&:hover": { backgroundColor: "primary.main" },
    },
  },

  layout: {
    container: { paddingY: 4 },
    title: {
      marginBottom: 3,
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
    },
    headerActions: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: 2,
    },
  },

  list: {
    container: {
      backgroundColor: "background.paper",
      borderRadius: 2,
      boxShadow: 1,
    },
  },

  item: {
    root: {
      paddingY: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    content: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
      minWidth: 0,
    },
    avatar: {
      objectFit: "cover",
      width: 60,
      height: 60,
      marginRight: 2,
      border: "2px solid",
      borderColor: "primary.main",
    },
    name: { fontWeight: "600" },
    description: { display: "flex", flexDirection: "column" },
    buttonGroup: {
      display: "flex",
      alignItems: "center",
      marginLeft: 1,
    },
    moreInfoIcon: { color: "grey.400", marginLeft: 2, padding: 1 },
    deleteIcon: { color: "action.main", padding: 1 },
  },
};
