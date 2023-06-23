import * as React from "react";
import { List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";

function SearchList({ listItem, searchChangeCity }) {
  return (
    <Paper
      component="body"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        marginTop: 1,
      }}
    >
      <List
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {listItem.map((item) => (
          <ListItemButton onClick={() => searchChangeCity(item.value)}>
            <ListItem key={item.value} disableGutters>
              <ListItemText primary={item.label} />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}

export default SearchList;
