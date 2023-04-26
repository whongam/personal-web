import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import React from "react";
import Tools from "../../data/Tools";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{margin:4}}>
      <Typography variant="h1" align="center" paddingBottom={3}>
        Tools I Have Used
      </Typography>
      <Grid container spacing={3}>
        {Tools.map((tool) => (
          <Grid item xs={12} sm={6} md={4} key={tool.id}>
            <Box sx={{ align: "center", justifyContent: "center" }}>
              <Card>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:colors.primary[400]
                  }}
                >
                  <CardMedia
                    sx={{
                      objectFit: "center",
                      height: 200,
                      width: 200,
                      display: "flex",
                    }}
                    component="img"
                    image={tool.img}
                    title={tool.name}
                  />
                </Box>
                <CardContent sx={{backgroundColor:colors.primary[400]}}>
                  <Typography variant="h4" component="h2" align="center">
                    {tool.name}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
