import React, { useState } from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Section from "./Section";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Input from "@mui/material/Input";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: "20px 0px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(Input)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "20px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "60ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

function App() {
  const [filter, setFilter] = useState("");

  const topics = [
    {
      id: 0,
      title: "React",
      color: "#019890",
      commands: [
        "npx create-create-react app",
        "cd app",
        "npm install",
        "npm start",
        "npm run build",
        "npm run test",
      ],
    },
    {
      id: 1,
      title: "Svelte",
      color: "#FCB300",
      commands: [
        "npx degit sveltejs/template my-svelte-project",
        "cd my-svelte-project",
        "npm install",
        "npm run dev",
      ],
    },
    {
      id: 2,
      title: "Vue",
      color: "#00CC65",
      commands: ["npm init vue@latest"],
    },
    {
      id: 3,
      title: "Angular",
      color: "#F21200",
      commands: ["npm i @angular/cli", "npm i @angular/material"],
    },
    {
      id: 4,
      title: "Git",
      color: "#B05A00",
      commands: [
        "git clone <https://link-con-nombre-del-repositorio>",
        "git status",
        "git add <archivo>",
        "git branch <nombre-de-la-rama>",
        "git push <nombre-remoto> <nombre-rama>",
        "git branch -d <nombre-de-la-rama>",
        "git checkout <nombre-de-la-rama>",
        "git commit -m 'mensaje de confirmación'",
      ],
    },
    {
      id: 5,
      title: "Material UI",
      color: "#5A95F3",
      commands: [
        "npm install @mui/material @emotion/react @emotion/styled",
        "npm install @mui/icons-material",
      ],
    },
    {
      id: 6,
      title: "Linux",
      color: "#9D9D9D",
      commands: [
        "ls -> se usa para ver el contenido de un directorio",
        "mkdir -> para crear un nuevo directorio",
        "touch -> te permite crear un nuevo archivo en blanco",
        "tail -> mostrará las últimas diez líneas de un archivo de texto",
        "ping -> para verificar tu estado de conectividad a un servidor",
      ],
    },
    {
      id: 7,
      title: "Vite",
      color: "#A85BFF",
      commands: [
        "npm create vite@latest",
        "cd vite-project",
        "npm install",
        "npm run dev",
        "npm run build",
        "npm run preview",
      ],
    },
  ];

  const topicsToShow = topics.filter((topic) =>
    topic.title.toLowerCase().includes(filter.trim().toLowerCase())
  );

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <Container>
        <Box sx={{ m: "1em", p: "1em" }}>
          <Typography
            sx={{
              fontFamily: "Ubuntu Mono, monospace",
              fontSize: "50px",
              fontWeight: "700",
              display: "inline",
              color: "white",
              textAlign: "center",
            }}
          >
            {">_Lista de Comandos"}
          </Typography>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={filter}
            onChange={(e) => handleFilter(e)}
          />
        </Search>
      </Container>
      {topicsToShow.map((topic) => (
        <Section
          key={topic.id}
          title={topic.title}
          color={topic.color}
          commands={topic.commands}
        />
      ))}
    </div>
  );
}

export default App;
