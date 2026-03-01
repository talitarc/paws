export const footerStyles = {
  footerContainer: {
    display: { xs: "none", sm: "block" },
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    boxSizing: "borderBox",
    backgroundColor: "primary.main",
    borderTop: "1px solid #ddd",
    py: 4,
    textAlign: "center",
  },

  footerLinksGroup: {
    textTransform: "none",
    color: "white",
    borderColor: "white",
    "& .MuiButtonGroup-grouped": {
      borderColor: "white",
    },
  },
};
