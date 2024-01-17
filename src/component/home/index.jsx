import { useTheme, Box, Grid, Typography } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";
import projects from "../../data/Projects";
import experience from "../../data/Exp";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ margin: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 1,
              border: "1px solid",
            }}
          >
            <Typography variant="h1" align="center" p={2} m={2}>
              Hi! Welcome To My Website!
              <br />
            </Typography>
            <Typography
              variant="h4"
              align="center"
              paddingBottom={2}
              p={2}
              m={2}
            >
              I'm Ken, a year 2 Computer Science student at the City University
              of Hong Kong.
              <br />
              Here you can find my projects and contact info.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 1,
              border: "1px solid",
              marginTop: 2,
            }}
          >
            <Typography variant="h3" align="left" p={2} m={2} color={colors.blueAccent[500]}>
              Experience
            </Typography>
            {experience.map((exp) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "center",
                    backgroundColor: colors.primary[400],
                    color: colors.text,
                    borderRadius: 1,
                    border: "1px solid",
                    marginLeft: 2,
                    marginRight: 2,
                    marginBottom: 2,
                  }}
                >
                  <Typography key={exp.id} variant="h4" m={2}>
                    {exp.rank}
                  </Typography>
                  <Typography
                    variant="h5"
                    marginLeft={3}
                    marginRight={3}
                    paddingBottom={2}
                  >
                    {exp.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRadius: 1, border: "1px solid" }}>
            <Typography variant="h3" align="left" p={2} m={2} color={colors.blueAccent[500]}>
              Projects
            </Typography>
            {projects.map((project) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "center",
                    backgroundColor: colors.primary[400],
                    color: colors.text,
                    borderRadius: 1,
                    border: "1px solid",
                    marginLeft: 2,
                    marginRight: 2,
                    marginBottom: 2,
                  }}
                >
                  <Typography key={project.id} variant="h4" m={2} color={colors.greenAccent[500]}>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    marginLeft={3}
                    marginRight={3}
                    marginBottom={2}
                  >
                    {project.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
