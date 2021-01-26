import React from "react";
import { Container, AppBar, Typography, Grow, Grid, Portal } from "@material-ui/core";

// import memories from './images/memories.png';
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>

      </AppBar>
        <Portal container=>
          <span>But I actually render here!</span>
        </Portal>
    </Container>
  );
};
export default App;
