export const contentCardStyles = {
  container: {
    display: { xs: "block", sm: "flex" },
    paddingY: "20px",
    flexDirection: { xs: "column", sm: "row" },
    width: { xs: 340, sm: "100%" },
    height: { xs: "auto", md: "60vh" },
    maxHeight: { md: "800px" },
    border: "10px solid white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    position: "relative",
    marginBottom: "10px",
  },

  media: {
    maxWidth: "50vh",
    maxHeight: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  navigation: {
    arrowButton: {
      display: { xs: "none", md: "flex" },
      padding: "60px 30px",
      color: "text.secondary",
    },
  },

  body: {
    contentBox: {
      textAlign: "left",
    },
    topSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingBottom: { md: "20px" },
      gap: 8,
    },
    description: {
      display: { xs: "none", md: "flex" },
      paddingY: "20px",
      maxHeight: { md: "40vh" },
      overflowY: "auto",
      paddingRight: "8px",
      whiteSpace: "pre-line",
    },
  },

  actions: {
    desktopButton: {
      display: { xs: "none", md: "flex" },
      backgroundColor: "action.secondary",
    },
    moreInfoButton: {
      display: { xs: "flex", md: "none" },
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: "rgba(255,255,255,0.8)",
      "&:hover": { backgroundColor: "#ffffff" },
    },
  },
};
