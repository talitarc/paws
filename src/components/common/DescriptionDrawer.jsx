import PropTypes from "prop-types";
import {
  Box,
  Typography,
  SwipeableDrawer,
  Divider,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import { Close, LocationOn, CalendarMonth } from "@mui/icons-material";
import { descriptionDrawerStyles } from "./DescriptionDrawer.styles";

const DescriptionDrawer = ({ open, onOpen, onClose, item }) => {
  if (!item) return null;
  const { name, breed, type, age, location, description } = item;
  const { container, elements, header, content } = descriptionDrawerStyles;

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      disableBackdropTransition={false}
      disableDiscovery={false}
      slotProps={{
        paper: {
          sx: container,
        },
      }}
    >
      <Box sx={elements.handle} />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Typography variant="h4" sx={header.name}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {breed || type}
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          aria-label="Close the drawer"
          sx={header.closeButton}
        >
          <Close fontSize="small" />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={1} sx={elements.chips}>
        <Chip icon={<CalendarMonth />} label={age} variant="outlined" />
        <Chip icon={<LocationOn />} label={location} variant="outlined" />
      </Stack>

      <Divider sx={content.divider} />

      <Typography variant="h6" gutterBottom sx={content.title}>
        About Me
      </Typography>
      <Typography variant="body1" sx={content.body}>
        {description ||
          "I'm a friendly companion waiting for a forever home. Come meet me!"}
      </Typography>
    </SwipeableDrawer>
  );
};

DescriptionDrawer.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    breed: PropTypes.string,
    type: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default DescriptionDrawer;
