export const descriptionDrawerStyles = {
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    p: 3,
    maxHeight: "80vh",
    backgroundColor: "#fff",
  },
  header: {
    name: { fontWeight: "bold", color: "text.primary" },
    closeButton: { backgroundColor: "grey.100" },
  },
  content: {
    divider: { mb: 3 },
    title: { fontWeight: "600" },
    body: { color: "text.secondary", lineHeight: 1.7, mb: 4 },
  },
  elements: {
    handle: {
      width: 40,
      height: 5,
      backgroundColor: "grey.300",
      borderRadius: 10,
      mx: "auto",
      mb: 2,
    },
    chips: { mt: 2, mb: 3 },
  },
};
