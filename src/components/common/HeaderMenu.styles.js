export const headerMenuStyles = {
  mobileMenu: { display: { xs: "inline-flex", sm: "none" } },
  desktopMenu: {
    display: { xs: "none", sm: "flex" },
    flexDirection: "column",
    alignItems: "flex-end",
  },
  menuBackdrop: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
  menuPaper: {
    minWidth: "250px",
    transform: "scale(1.2)",
    transformOrigin: "top right",
  },
};
