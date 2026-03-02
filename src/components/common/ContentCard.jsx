import { useState } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Skeleton,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionDrawer from "./DescriptionDrawer";
import { contentCardStyles } from "./ContentCard.styles";

const ContentCard = ({ item, onAction }) => {
  const { container, media, navigation, body, actions } = contentCardStyles;
  const { name, sex, breed, age, image, alt, location, type, description } =
    item;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 150) onAction("like");
    else if (info.offset.x < -150) onAction("goLeft");
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
      {item ? (
        <>
          <Button
            onClick={() => onAction("goLeft")}
            sx={navigation.arrowButton}
            aria-label="Go to previous pet"
          >
            <KeyboardArrowLeftIcon />
          </Button>

          <Card sx={container}>
            <CardMedia
              component="img"
              sx={media}
              image={image}
              alt={alt ? alt : name}
            />

            <CardContent sx={body.contentBox}>
              <Box sx={body.topSection}>
                <Box sx={body.topSection.name}>
                  <Typography variant="h5" fontWeight="900">
                    {name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {sex} - {breed || type}, {age}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {location}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  onClick={() => onAction("like")}
                  aria-label="Add to Favourites List"
                  sx={actions.desktopButton}
                >
                  Add to favourites
                </Button>
              </Box>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={body.description}
              >
                {description}
              </Typography>
            </CardContent>
          </Card>

          <Button
            onClick={() => onAction("goRight")}
            sx={navigation.arrowButton}
            aria-label="Go to the next pet"
          >
            <KeyboardArrowRightIcon />
          </Button>

          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open a longer description"
            sx={actions.moreInfoButton}
          >
            <InfoIcon color="text.secondary" />
          </IconButton>

          <DescriptionDrawer
            open={isDrawerOpen}
            onOpen={() => setIsDrawerOpen(true)}
            onClose={() => setIsDrawerOpen(false)}
            item={item}
          />
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

ContentCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string,
    sex: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onAction: PropTypes.func.isRequired,
};

export default ContentCard;
