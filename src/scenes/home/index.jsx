import { useTheme, Box } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";
import  projects  from "../../data/Projects";


const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="projects">
      {
        projects.map((project) => {
          return (
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
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </Box>
          );
        })
      }
    </div>
  );
};

export default Home;
