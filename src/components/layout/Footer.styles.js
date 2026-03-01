export const footerStyles = {
  layout: {
    container: {
      display: { xs: "none", sm: "block" },
      borderTopLeftRadius: "6px",
      borderTopRightRadius: "6px",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "primary.main",
      borderTop: "1px solid #dddddd",
      paddingY: 4,
      textAlign: "center",
    },
  },

  navigation: {
    buttonGroup: {
      textTransform: "none",
      color: "white",
      borderColor: "white",
      "& .MuiButtonGroup-grouped": {
        borderColor: "white",
      },
    },
  },
};
