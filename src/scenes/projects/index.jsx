import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";
import  projects  from "../../data/Projects";

const Projects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
        <div className="content">
        <Typography variant="h3" textAlign="center">My Projects</Typography>
        {
          projects.map((project) => {
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
                  p: 2,
                  m: 2,
                  width: "100%",
                  maxWidth: 600,
                }}
              >
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </Box>
            );
          })
      
        }
      </div>
      </Box>
    );
}

export default Projects;