import { Box, Stack, Typography, Link, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Stack spacing={4}>
        <Typography variant="h1" align="center" paddingBottom={3}>
          Contacts
        </Typography>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: 5,
            paddingBottom: 5,
            border: "1px solid",
            borderRadius: 1,
          }}
        >
          <Typography variant="h2">Email</Typography>
          <Link href="honamwongg@gmail.com" underline="hover" color="secondary">
            honamwongg@gmail.com
          </Link>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: 5,
            paddingBottom: 5,
            border: "1px solid",
            borderRadius: 1,
          }}
        >
          <Typography variant="h2">Github</Typography>
          <Link
            href="https://github.com/whongam"
            underline="hover"
            color="secondary"
          >
            https://github.com/whongam
          </Link>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: 5,
            paddingBottom: 5,
            border: "1px solid",
            borderRadius: 1,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <Typography variant="h2">LinkedIn</Typography>
          <Link
            href="https://www.linkedin.com/in/wonghonam/"
            underline="hover"
            color="secondary"
          >
            https://www.linkedin.com/in/wonghonam/
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contacts;
