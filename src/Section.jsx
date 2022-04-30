import { Container } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";


import React from "react";

function Section(props) {
  return (
    <Container
      sx={{
        width: "800px",
        my: "30px",
        background: `linear-gradient(45deg, #1D1D1D  ,#525252 , ${props.color}), #E9E9E9 `,
        p: "20px",
        borderRadius: "10px",
        border: `5px ${props.color} solid`,
        borderStyle: "solid",
      }}
    >
      <Card
        variant="elevation"
        sx={{
          p: "10px",
          borderRadius: "10px",
          m: "10px",
          backgroundColor: "rgba(255,255,255,0.7)",
        }}
      >
        <CardContent>
          <Typography
            color="blue"
            sx={{
              fontFamily: "Ubuntu Mono, monospace",
              fontSize: "25px",
              fontWeight: "700",
              display: "inline",
              color: `${props.color}`,
              textAlign: "center",
              boxShadow: "10px 5px 5px #525252",
              p: "4px"              
            }}
          >
            {props.title}
          </Typography>

          <List sx={{ width: "90%" }}>
            <ListItem sx={{ display: "block" }}>
              {props.commands.map((cmd, index) => (
                <ListItemText key={index}>
                  <code>{cmd}</code>
                  <Divider variant="fullWidth" />
                </ListItemText>
              ))}
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Section;
