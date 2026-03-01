export const headerMenuStyles = {
  platform: {
    mobileContainer: {
      display: { xs: "inline-flex", sm: "none" },
    },
    desktopContainer: {
      display: { xs: "none", sm: "flex" },
      flexDirection: "column",
      alignItems: "flex-end",
    },
  },

  menu: {
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    paper: {
      minWidth: "250px",
      transform: "scale(1.2)",
      transformOrigin: "top right",
    },
  },
};
