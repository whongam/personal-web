import { Box, IconButton, useTheme, Stack, Button } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="right" p={1}>
      <Stack direction="row" spacing={2}>
        <Button color="inherit" href="/">
          Home{" "}
        </Button>
        <Button color="inherit" href="/about">
          About{" "}
        </Button>
        <Button color="inherit" href="/projects">
          Projects{" "}
        </Button>
        <Button color="inherit" href="/contacts">
          Contacts{" "}
        </Button>
      </Stack>

      {/* ICON */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
