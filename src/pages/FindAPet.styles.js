export const findAPetStyles = {
  layout: {
    swipeArea: {
      position: "relative",
      width: { xs: "95%", sm: "85%", md: "80%" },
      height: { xs: "50vh", md: "80vh" },
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      marginTop: 4,
    },
  },

  skeleton: {
    width: { xs: 340, sm: "100%" },
    height: { xs: 530, md: "60vh" },
    borderRadius: 2,
    marginTop: "30px",
  },

  controls: {
    buttonStack: {
      display: { xs: "flex", md: "none" },
      marginTop: 3,
    },
  },
};
