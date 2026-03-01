import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { contentCardStyles } from "./ContentCard.styles";

const ContentCard = ({ pet, onAction }) => {
  const {
    cardBox,
    cardContentBox,
    cardContentDescription,
    contentArrowButton,
  } = contentCardStyles;
  const { name, sex, breed, age, image, alt, location, type, description } =
    pet;
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 150) onAction("right");
    else if (info.offset.x < -150) onAction("left");
  };

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        position: "absolute",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
    >
      {pet ? (
        <>
          <Button
            onClick={() => onAction("left")}
            sx={contentArrowButton}
            aria-label="Go to previous pet"
          >
            <KeyboardArrowLeftIcon />
          </Button>
          <Card sx={cardBox}>
            <CardMedia
              component="img"
              sx={{
                maxWidth: "50vh",
                maxHeight: "30vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              image={image}
              alt={alt ? alt : name}
            />
            <CardContent sx={cardContentBox}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5" fontWeight="900">
                    {name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {sex} - {breed ? breed : type}, {age}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {location}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => console.log("Pet liked")}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    backgroundColor: "#169453",
                  }}
                >
                  Add to favorites
                </Button>
              </Box>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={cardContentDescription}
              >
                {description}
              </Typography>
            </CardContent>
          </Card>
          <Button
            onClick={() => onAction("right")}
            sx={contentArrowButton}
            aria-label="Go to the next pet"
          >
            <KeyboardArrowRightIcon />
          </Button>
        </>
      ) : (
        <Skeleton
          variant="rectangular"
          width={360}
          height={530}
          sx={{ borderRadius: 2 }}
        />
      )}
    </motion.div>
  );
};

export default ContentCard;
