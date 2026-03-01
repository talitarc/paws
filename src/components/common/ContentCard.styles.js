export const contentCardStyles = {
  container: {
    display: { xs: "block", sm: "flex" },
    paddingY: "20px",
    flexDirection: { xs: "column", sm: "row" },
    width: { xs: 340, sm: "100%" },
    maxHeight: { md: "50vh" },
    border: "10px solid white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    position: "relative",
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
    description: {
      display: { xs: "none", md: "flex" },
      paddingY: "20px",
      maxHeight: "200px",
      overflowY: "auto",
      paddingRight: "8px",
      whiteSpace: "pre-line",
    },
  },

  actions: {
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
