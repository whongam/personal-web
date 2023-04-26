import { useTheme, Box, Grid, Typography } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";
import projects from "../../data/Projects";
import education from "../../data/Edu";
import experience from "../../data/Exp";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ alignItems: "center", justifyContent: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="center"
            paddingBottom={5}
            paddingTop={2}
          >
            Hi! Welcome To My Website!
            <br />
          </Typography>
          <Typography variant="h4" align="center" paddingBottom={3}>
            I'm Ken, a year 2 Computer Science student at the City University of
            Hong Kong.<br/>
            Here you can find my projects and contact info.
          </Typography>

          <Box sx={{ paddingTop: 3 }}>
            {projects.map((project) => {
              return (
                <Grid container spacing={2} justifyContent="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      justifyContent: "center",
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderRadius: 1,
                      border: "1px solid",
                      p: 2,
                      m: 2,
                      width: "100%",
                      maxWidth: 600,
                    }}
                  >
                    <h2 key={project.id}>{project.name}</h2>
                    <p>{project.description}</p>
                  </Box>
                </Grid>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
