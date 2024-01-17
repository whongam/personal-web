import { useTheme, Box, Typography, Button } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";
import projects from "../../data/Projects";

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h1" align="center" paddingBottom={3}>
        My Projects
      </Typography>

      {projects.map((project) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.background,
              color: colors.text,
              borderRadius: 1,
              border: "1px solid",
              marginLeft: 6,
              marginRight: 6,
              marginBottom: 2,
            }}
          >
            <Typography variant="h3" m={2} align="center">
              {project.name}
            </Typography>
            <Typography variant="h5" m={2} align="center">
              {project.description}
            </Typography>
            <Box sx={{ m: 2 }}>
              <Button href={project.link} variant="outlined" color="secondary">
                Take a visit
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Projects;
