export const contentCardStyles = {
  cardBox: {
    display: { xs: "block", sm: "flex" },
    paddingY: "20px",
    flexDirection: { xs: "column", sm: "row" },
    width: { xs: 340, sm: "100%" },
    maxHeight: { md: "50vh" },
    border: "10px solid white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
  contentArrowButton: {
    display: { xs: "none", md: "flex" },
    padding: "60px 30px ",
    color: "text.secondary",
  },
  cardContentBox: { textAlign: "left" },
  cardContentDescription: {
    display: { xs: "none", md: "flex" },
    paddingY: "20px",
    maxHeight: "200px",
    overflowY: "auto",
    paddingRight: "8px",
    whiteSpace: "pre-line",
  },
};
